"use client";

import React from "react";
import { ShieldCheck, Leaf, Heart, ThumbsUp, Sparkles, UserCheck } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <UserCheck className="w-6 h-6 text-sky-500" />,
      title: "Professional Bodyworkers",
      description: "Every therapist is background-checked, licensed, and trained in specialized bodywork.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-teal-500" />,
      title: "Premium Massage Oils",
      description: "We use hypo-allergenic, cold-pressed essential oils for optimal skin nourishment.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
      title: "Strict Hygiene Standards",
      description: "Strict sanitation guidelines and fresh luxury linens for every guest experience.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Personalized Care",
      description: "Pressure levels, aromatics, and focused areas are customized entirely to your comfort.",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-sky-500" />,
      title: "Satisfaction Guaranteed",
      description: "If your session doesn't leave you feeling renewed, we will happily make it right.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Calming Ambiance",
      description: "Tranquil soundscapes and soothing lighting designed to quiet a busy mind.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <span>Why HotTouch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Our Clients Trust Us For Their Wellness
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            We are committed to delivering the highest standards of safety, comfort, and restorative body therapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-sky-50/40 border border-sky-100/80 hover:bg-white hover:shadow-lg hover:border-sky-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
