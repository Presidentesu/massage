"use client";

import React, { useState } from "react";
import { Provider } from "@/types";
import { Edit2, Trash2, Phone, MapPin, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

interface ProviderTableProps {
  providers: Provider[];
  onEdit: (provider: Provider) => void;
  onDelete: (id: string | number, imageUrl?: string) => Promise<void>;
  isDeleting: boolean;
}

export const ProviderTable: React.FC<ProviderTableProps> = ({
  providers,
  onEdit,
  onDelete,
  isDeleting,
}) => {
  const [deleteId, setDeleteId] = useState<string | number | null>(null);

  const confirmDelete = async () => {
    if (deleteId === null) return;
    const target = providers.find((p) => p.id === deleteId);
    await onDelete(deleteId, target?.image);
    setDeleteId(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              <th className="py-4 px-6">Provider</th>
              <th className="py-4 px-6">Phone Number</th>
              <th className="py-4 px-6">Address / Location</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {providers.map((provider) => (
              <tr key={String(provider.id)} className="hover:bg-slate-50/50 transition-colors">
                {/* Profile Image & Name */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-sky-100 shrink-0"
                    />
                    <div className="font-bold text-slate-900">{provider.name}</div>
                  </div>
                </td>

                {/* Phone */}
                <td className="py-4 px-6 font-mono font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{provider.phone}</span>
                  </div>
                </td>

                {/* Address / Location */}
                <td className="py-4 px-6 text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{provider.location || "Optional / Not Specified"}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-6">
                  {provider.available !== false ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Active</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      <XCircle className="w-3.5 h-3.5 text-slate-400" />
                      <span>Inactive</span>
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onEdit(provider)}
                      className="p-2 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
                      title="Edit Provider"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteId(provider.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                      title="Delete Provider"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full space-y-4 text-center shadow-2xl border border-slate-100 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Delete Provider?</h3>
              <p className="text-xs text-slate-500 mt-1">
                Are you sure you want to delete this provider record?
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setDeleteId(null)}
                disabled={isDeleting}
                className="w-1/2 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={isDeleting}
                className="w-1/2 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderTable;
