"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Heart, Phone, Send } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Hot Massage <span className="text-sky-400 font-normal text-sm">Extra Service</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing restorative body therapy, certified massage specialists, and personalized wellness care to bring comfort, vitality, and tranquility back into your life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/extra-service" className="hover:text-sky-400 transition-colors">
                  Get Now
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Contact Us</h4>
            <div className="text-sm space-y-2.5 text-slate-400">
              <a
                href="tel:+251986474272"
                className="flex items-center gap-2 text-slate-200 font-bold hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+251 986 474 272</span>
              </a>

              <div className="flex flex-col space-y-1.5 pt-1">
                <a
                  href="https://wa.me/251986474272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>WhatsApp: +251 986 474 272</span>
                </a>

                <a
                  href="https://t.me/hotmassage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>Telegram: @hotmassage</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Sanctuary Hours</h4>
            <div className="text-sm space-y-1.5 text-slate-400">
              <p className="text-slate-200 font-bold">
                Open 24 Hours / 7 Days a Week
              </p>
              <p className="text-xs text-sky-400 font-medium pt-1">
                Therapist booking open 24/7 online & by call
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hot Massage & Spa. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for complete relaxation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
