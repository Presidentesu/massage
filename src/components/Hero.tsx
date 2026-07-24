"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Heart, Sparkles, Users, Phone, Send } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-sky-50/30">
      {/* Background Subtle Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-sky-700 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Premium Wellness & Therapeutic Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Experience True <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                Harmony & Relaxation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              De-stress your body and restore your mind with our customized massage therapies. 
              Our certified professional therapists bring tranquil spa care directly to your lifestyle.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/extra-service"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Users className="w-5 h-5" />
                <span>Get Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+251986474272"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-md shadow-red-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>+251 986 474 272</span>
              </a>
            </div>

            {/* Direct Instant Booking Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-slate-600">
              <span className="text-slate-400 font-medium">Quick Contact:</span>
              <a
                href="https://wa.me/251986474272"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>WhatsApp (+251986474272)</span>
              </a>

              <a
                href="https://t.me/hottmassage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-sky-500" />
                <span>Telegram (@hottmassage)</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Star className="w-4 h-4 fill-sky-500 text-sky-500" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">4.9 / 5</div>
                  <div className="text-xs text-slate-500 font-medium">Guest Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">5,000+</div>
                  <div className="text-xs text-slate-500 font-medium">Happy Clients</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Image Banner */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-sky-950/15 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                alt="Relaxing Spa & Massage Treatment"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
            </div>

            {/* Floating Info Overlay Card */}
            <div className="absolute top-6 left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-sky-100 max-w-[220px] animate-fade-in hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-lg shrink-0">
                  🌿
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Organic Oils</p>
                  <p className="text-[11px] text-slate-500">Pure Essential Extracts</p>
                </div>
              </div>
            </div>

            {/* Floating Info Overlay Card 2 */}
            <div className="absolute bottom-6 right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-sky-100 max-w-[240px] animate-fade-in hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Therapist Sophia"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80"
                    alt="Therapist Emma"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                    alt="Therapist Olivia"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Top Therapists</p>
                  <p className="text-[11px] text-sky-600 font-medium">Ready to assist today</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
