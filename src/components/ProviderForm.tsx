"use client";

import React, { useState, useRef, useEffect } from "react";
import { Provider } from "@/types";
import { Camera, ImageIcon, Loader2, Save, X, Info } from "lucide-react";

interface ProviderFormProps {
  initialData?: Provider | null;
  onSave: (providerData: Omit<Provider, "id">, selectedImage: string | null) => Promise<void>;
  onCancel: () => void;
  isSaving: boolean;
}

export const ProviderForm: React.FC<ProviderFormProps> = ({
  initialData,
  onSave,
  onCancel,
  isSaving,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(initialData?.image || null);
  const [name, setName] = useState(initialData?.name || "");
  const [phone, setPhone] = useState(initialData?.phone || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [available, setAvailable] = useState<boolean>(
    initialData?.available !== undefined ? initialData.available : true
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setPhone(initialData.phone || "");
      setLocation(initialData.location || "");
      setAvailable(initialData.available !== false);
      setSelectedImage(initialData.image || null);
    }
  }, [initialData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please provide provider name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please provide provider phone number.");
      return;
    }
    if (!selectedImage) {
      setError("Please select or upload a profile image.");
      return;
    }

    setError("");
    try {
      await onSave(
        {
          name,
          phone,
          image: selectedImage,
          location,
          available,
        },
        selectedImage
      );
    } catch (err: any) {
      setError(err.message || "Failed to save provider.");
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {initialData ? "Edit Provider" : "Add New Provider"}
          </h2>
          <p className="text-xs text-slate-500">
            Provide provider name, phone number, optional address/location, and profile photo.
          </p>
        </div>
        <button
          onClick={onCancel}
          className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-semibold flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Photo Selector */}
          <div className="lg:col-span-5 space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Profile Photo *
            </label>
            <div
              className={`w-full aspect-[3/4] rounded-2xl border-2 border-dashed ${
                error && !selectedImage ? "border-red-300 bg-red-50/20" : "border-slate-200 bg-slate-50"
              } flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:border-sky-400 transition-all`}
              onClick={() => fileInputRef.current?.click()}
            >
              {selectedImage ? (
                <>
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                    <Camera className="w-8 h-8 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider">Change Image</span>
                  </div>
                </>
              ) : (
                <div className="text-center p-6 cursor-pointer">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xs text-slate-400 group-hover:text-sky-500 transition-colors">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Upload Photo
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium block mt-1">
                    JPEG, PNG or WebP
                  </span>
                </div>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Form Inputs */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Provider Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sophia"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white outline-hidden rounded-xl text-sm font-medium transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+251 986 474 272"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white outline-hidden rounded-xl text-sm font-medium transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Address / Location (Optional)
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Bole, Addis Ababa"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white outline-hidden rounded-xl text-sm font-medium transition-all"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="available"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
                className="w-4 h-4 text-sky-600 rounded-md border-slate-300 focus:ring-sky-500"
              />
              <label htmlFor="available" className="text-xs font-bold text-slate-800 cursor-pointer">
                Provider Active / Available
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSaving}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/20 transition-all active:scale-95 disabled:opacity-70"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{initialData ? "Update Provider" : "Save Provider"}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProviderForm;
