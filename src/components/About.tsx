"use client";

import React from "react";
import { CheckCircle2, Award, Clock, HeartHandshake, ShieldCheck } from "lucide-react";

export const About: React.FC = () => {
  const features = [
    "Certified & Rigorously Vetted Massage Therapists",
    "Premium Organic Botanical & Essential Oils",
    "Customized Pressure & Treatment Preferences",
    "Punctual, Hygienic, & Tranquil Service",
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80"
                alt="Massage Therapy Sanctuary"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-sky-900/10" />
            </div>

            {/* Inset Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white p-6 rounded-2xl shadow-xl max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-xs">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black">10+ Years</div>
                  <div className="text-xs text-sky-100 font-medium">Excellence in Wellness</div>
                </div>
              </div>
            </div>

            {/* Soft decorative background shape */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-sky-50 rounded-3xl -z-10" />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              <span>About Hot Massage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Dedicated to Rebalancing Your <span className="text-sky-600">Mind & Body</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Hot Massage, we believe that massage therapy is not merely a luxury—it is an essential practice for body longevity, mental clarity, and deep stress recovery.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Whether you need deep muscular release after intense physical activity, targeted relief from desk work fatigue, or an aromatic escape from daily pressures, our talented therapists personalize every stroke to meet your specific physical needs.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Sub-cards */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-sky-50/60 border border-sky-100">
                <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Flexible Scheduling</div>
                  <div className="text-[11px] text-slate-500">7 Days a Week</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-sky-50/60 border border-sky-100">
                <HeartHandshake className="w-5 h-5 text-sky-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Personalized Touch</div>
                  <div className="text-[11px] text-slate-500">Tailored to You</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
