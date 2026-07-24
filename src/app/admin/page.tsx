"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useProviders } from "@/hooks/useProviders";
import ProviderTable from "@/components/ProviderTable";
import ProviderForm from "@/components/ProviderForm";
import { Provider } from "@/types";
import { addProvider, updateProvider, deleteProvider } from "@/services/providerService";
import {
  Plus,
  Search,
  LogOut,
  Sparkles,
  Users,
  CheckCircle,
  Loader2,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function AdminDashboardPage() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const { providers, loading: providersLoading, error, refreshProviders } = useProviders();

  const [searchQuery, setSearchQuery] = useState("");
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingProvider, setEditingProvider] = useState<Provider | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Toast Notifications State
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Guard Route: Redirect unauthenticated users to /login
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  if (authLoading || (!user && authLoading)) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center gap-4 bg-slate-50">
        <Loader2 className="w-10 h-10 text-sky-500 animate-spin" />
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Checking Admin Session...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.phone.includes(searchQuery) ||
    (p.location && p.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalProviders = providers.length;
  const availableProviders = providers.filter((p) => p.available !== false).length;

  const handleOpenAddForm = () => {
    setEditingProvider(null);
    setShowFormModal(true);
  };

  const handleOpenEditForm = (provider: Provider) => {
    setEditingProvider(provider);
    setShowFormModal(true);
  };

  const handleSaveProvider = async (
    providerData: Omit<Provider, "id">,
    selectedImage: string | null
  ) => {
    setIsSaving(true);
    try {
      if (editingProvider) {
        await updateProvider(String(editingProvider.id), providerData, selectedImage);
        showToast("Provider updated successfully!", "success");
      } else {
        await addProvider(providerData, selectedImage);
        showToast("Provider added successfully!", "success");
      }
      setShowFormModal(false);
      setEditingProvider(null);
      await refreshProviders();
    } catch (err: any) {
      console.error("Save failure:", err);
      showToast(err.message || "Upload failed. Please check credentials.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteProvider = async (id: string | number, imageUrl?: string) => {
    setIsDeleting(true);
    try {
      await deleteProvider(String(id), imageUrl);
      showToast("Provider deleted successfully!", "success");
      await refreshProviders();
    } catch (err: any) {
      console.error("Delete failure:", err);
      showToast(err.message || "Failed to delete provider.", "error");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 relative">
      
      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed top-24 right-6 z-50 animate-fade-in">
          <div
            className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl border text-sm font-bold ${
              toast.type === "success"
                ? "bg-emerald-500 text-white border-emerald-400 shadow-emerald-500/20"
                : "bg-rose-600 text-white border-rose-500 shadow-rose-600/20"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200 py-8 mb-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                <span>Admin Management System</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Provider Management Dashboard
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Signed in as <span className="font-bold text-slate-800">{user.email}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={handleOpenAddForm}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-sky-500/20 transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Add Provider</span>
              </button>

              <button
                onClick={handleSignOut}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-4 py-2.5 rounded-xl transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">{totalProviders}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Total Providers
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">{availableProviders}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Available Today
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">5</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Massage Categories
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Form Overlay */}
        {showFormModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="max-w-3xl w-full my-8">
              <ProviderForm
                initialData={editingProvider}
                onSave={handleSaveProvider}
                onCancel={() => {
                  setShowFormModal(false);
                  setEditingProvider(null);
                }}
                isSaving={isSaving}
              />
            </div>
          </div>
        )}

        {/* Search & Provider Table */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search provider name, phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:border-sky-500 outline-hidden rounded-xl text-xs font-semibold transition-all shadow-xs"
              />
            </div>

            <button
              onClick={refreshProviders}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh List</span>
            </button>
          </div>

          {providersLoading ? (
            <div className="bg-white rounded-3xl p-16 text-center border border-slate-100 flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Loading Firestore Documents...
              </p>
            </div>
          ) : filteredProviders.length > 0 ? (
            <ProviderTable
              providers={filteredProviders}
              onEdit={handleOpenEditForm}
              onDelete={handleDeleteProvider}
              isDeleting={isDeleting}
            />
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 text-slate-500 text-sm">
              No service providers found matching your search.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
