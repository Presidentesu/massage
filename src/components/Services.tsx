"use client";

import React from "react";
import { sensualServices } from "@/data/services";
import { Phone, Sparkles } from "lucide-react";

const WhatsappIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.613-.918-2.208-.242-.58-.487-.502-.67-.511-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.92 0-3.8-.513-5.45-1.485l-.391-.231-4.053 1.063 1.082-3.952-.256-.407a10.05 10.05 0 0 1-1.543-5.385C1.44 6.87 6.13 2.18 11.905 2.18c2.79 0 5.413 1.087 7.387 3.063a10.37 10.37 0 0 1 3.057 7.387c0 5.77-4.69 10.46-10.301 10.46m0-19.16C5.518 2.682.352 7.848.352 14.232c0 2.296.671 4.54 1.94 6.471L.002 24l3.376-.886a11.53 11.53 0 0 0 6.173 1.764c6.386 0 11.551-5.166 11.551-11.55 0-3.088-1.203-5.99-3.387-8.174A11.47 11.47 0 0 0 11.9.002" />
  </svg>
);

const TelegramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.38-.49 1.07-.75 4.19-1.83 6.99-3.04 8.4-3.63 4-.17 4.84.52 4.78 1.48z" />
  </svg>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Incall &amp; Outcall Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Sensual Services &ndash; Erotic Massage in Addis Ababa
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Explore our range of sensual services at Hot Massage, designed to ignite your passions and renew your energy. All available 24/7, incall in Bole or outcall to your hotel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {sensualServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  {service.name}
                </h3>

                {/* Service Image */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xs bg-slate-100 mb-5">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {service.description}
                </p>
              </div>

              {/* Action Contact Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href="tel:+251986474272"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/251986474272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-xs"
                  aria-label="Book on WhatsApp"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://t.me/hottmassage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white transition-colors shadow-xs"
                  aria-label="Book on Telegram"
                >
                  <TelegramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
