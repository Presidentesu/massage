"use client";

import React, { useMemo } from "react";
import ProviderCard from "@/components/ProviderCard";
import { useProviders } from "@/hooks/useProviders";
import { Provider } from "@/types";

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

export const OurGirls: React.FC = () => {
  const { providers: dynamicProviders } = useProviders();

  // Combine dynamic admin-added providers FIRST, followed by initial default girls
  const allGirls = useMemo(() => {
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

  return (
    <section id="our-girls" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Description Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Girls
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Our girls are the most beautiful, curvy, and passionate Habesha queens in Addis Ababa.
            Each is selected for her charm, body, and skill in sensual massage. They provide Nuru,
            body-to-body, happy ending, and more with loving care. Real photos &ndash; no fakes.
            Professional, friendly, discreet, English &amp; Amharic speaking. Always fresh, clean,
            and ready to make your experience thrilling. See private photos on WhatsApp. Book your
            favorite girl for incall or outcall today.
          </p>
        </div>

        {/* Girls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-16">
          {allGirls.map((girl) => (
            <ProviderCard key={String(girl.id)} provider={girl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGirls;
