"use client";

import React, { useState, useMemo } from "react";
import ProviderCard from "@/components/ProviderCard";
import { useProviders } from "@/hooks/useProviders";
import { Provider } from "@/types";
import { Search, Sparkles, PhoneCall, RefreshCw } from "lucide-react";

const initialGirls: Provider[] = [
  {
    id: "eva",
    name: "Eva",
    description: "Swedish Massage , Nuru Massage, Happy Ending Massage, Erotic Oil Massage",
    image: "/girls/eva.jpg",
    phone: "+251986474272",
  },
  {
    id: "salem",
    name: "Salem",
    description: "Nuru Massage, Four Hands Massage, Tantric Massage, Body-to-Body Massage",
    image: "/girls/salem.jpg",
    phone: "+251986474272",
  },
  {
    id: "mahider",
    name: "Mahider",
    description: "Tantric Massage, Nuru Massage, Happy Ending Massage, Body-to-Body Massage",
    image: "/girls/mahider.jpg",
    phone: "+251986474272",
  },
  {
    id: "feven",
    name: "Feven",
    description: "Swedish Massage , Nuru Massage, Happy Ending Massage, Erotic Oil Massage",
    image: "/girls/feven.jpg",
    phone: "+251986474272",
  },
  {
    id: "abemi",
    name: "Abemi",
    description: "Swedish Massage , Nuru Massage, Happy Ending Massage, Erotic Oil Massage",
    image: "/girls/abemi.jpg",
    phone: "+251986474272",
  },
  {
    id: "ruta",
    name: "Ruta",
    description: "Swedish Massage , Nuru Massage, Happy Ending Massage, Erotic Oil Massage",
    image: "/girls/ruta.jpg",
    phone: "+251986474272",
  },
];

export default function ExtraServicePage() {
  const { providers: dynamicProviders, loading, error, refreshProviders } = useProviders();
  const [searchQuery, setSearchQuery] = useState("");

  // Merge dynamic admin-added providers FIRST, followed by initial default girls
  const allProviders = useMemo(() => {
    if (!dynamicProviders || dynamicProviders.length === 0) {
      return initialGirls;
    }

    const dynamicNames = new Set(
      dynamicProviders.map((p) => p.name.toLowerCase().trim())
    );

    const remainingInitial = initialGirls.filter(
      (girl) => !dynamicNames.has(girl.name.toLowerCase().trim())
    );

    return [...dynamicProviders, ...remainingInitial];
  }, [dynamicProviders]);

  const filteredProviders = useMemo(() => {
    return allProviders.filter((provider) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      const matchesName = provider.name.toLowerCase().includes(q);
      const matchesPhone = provider.phone ? provider.phone.includes(q) : false;
      const matchesLocation = provider.location ? provider.location.toLowerCase().includes(q) : false;
      const matchesDesc = provider.description ? provider.description.toLowerCase().includes(q) : false;
      return matchesName || matchesPhone || matchesLocation || matchesDesc;
    });
  }, [allProviders, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-sky-100/60 via-sky-50/40 to-slate-50 border-b border-sky-100 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Our Massage Therapists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-sky-600">Massage Therapists</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Browse through all our girls below. Tap Call, WhatsApp, or Telegram on any profile to connect directly.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, service or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-hidden shadow-sm transition-all text-sm font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProviders.map((provider) => (
              <ProviderCard key={String(provider.id)} provider={provider} />
            ))}
          </div>
        ) : loading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm p-4 space-y-4 animate-pulse"
              >
                <div className="w-full aspect-[3/4] bg-slate-200 rounded-2xl" />
                <div className="h-6 bg-slate-200 rounded-md w-1/2 mx-auto" />
                <div className="h-4 bg-slate-100 rounded-md w-3/4 mx-auto" />
                <div className="h-10 bg-slate-200 rounded-full w-2/3 mx-auto pt-2" />
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error State */
          <div className="text-center py-16 bg-white rounded-3xl border border-red-100 max-w-md mx-auto p-8 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mx-auto mb-3">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Failed to Load Therapists</h3>
            <p className="text-slate-500 text-xs mb-4">{error}</p>
            <button
              onClick={refreshProviders}
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 px-4 py-2 rounded-xl"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto p-8 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 mx-auto mb-4">
              <PhoneCall className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Profiles Found</h3>
            <p className="text-slate-500 text-sm mb-4">
              {searchQuery ? `No profile matches '${searchQuery}'.` : "No therapist profiles added yet."}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 underline"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
