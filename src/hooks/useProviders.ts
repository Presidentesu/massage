"use client";

import { useState, useEffect, useCallback } from "react";
import { Provider } from "@/types";
import { getProviders } from "@/services/providerService";

// Module-level in-memory cache to prevent flashing on route transitions
let cachedProviders: Provider[] | null = null;

export const useProviders = () => {
  const [providers, setProviders] = useState<Provider[]>(cachedProviders || []);
  const [loading, setLoading] = useState<boolean>(cachedProviders === null);
  const [error, setError] = useState<string | null>(null);

  const fetchAllProviders = useCallback(async () => {
    try {
      // Only show loading state if no cached data exists
      if (!cachedProviders) {
        setLoading(true);
      }
      const data = await getProviders();
      const freshData = data || [];
      cachedProviders = freshData;
      setProviders(freshData);
      setError(null);
    } catch (err: any) {
      console.warn("Notice fetching providers:", err);
      if (!cachedProviders) {
        setError("Failed to load service providers.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllProviders();
  }, [fetchAllProviders]);

  return {
    providers,
    loading: loading && providers.length === 0,
    error,
    refreshProviders: fetchAllProviders,
  };
};

export default useProviders;
