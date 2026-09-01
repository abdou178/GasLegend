"use client";

import React from "react";
import { CORE_SERVICES, CONTRACTOR_DATA, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import {
  Flame,
  Droplets,
  RotateCw,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Clock,
  Sparkles
} from "lucide-react";

export function ServicesGrid() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-6 h-6 text-amber-500" />;
      case "Droplets":
        return <Droplets className="w-6 h-6 text-blue-500" />;
      case "RotateCw":
        return <RotateCw className="w-6 h-6 text-emerald-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-purple-500" />;
      default:
        return <Flame className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 transition-colors"
      aria-label="Core Emergency Plumbing and Heating Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-500/10 dark:bg-flame-500/15 border border-flame-500/30 text-flame-600 dark:text-flame-400 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Specialist Heating & Plumbing Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Rapid 24/7 Response for Every Domestic Heating Crisis
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From midnight boiler lockouts to catastrophic ceiling pipe bursts, our Bolton team carries the diagnostic tools and OEM spares to resolve the issue on the first visit.
          </p>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-amber-400/50 dark:hover:border-amber-500/40 transition-all shadow-sm hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Top Icon & Tagline */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 px-3 py-1 rounded-full">
                    {service.pricingNote}
                  </span>
                </div>

                {/* Title & Scope */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white mb-1.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.scope}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-2.5 mb-8">
                  {service.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  Call: {CONTRACTOR_DATA.phoneDisplay}
                </a>

                <a
                  href={buildWhatsAppEmergencyUrl({ issueTitle: service.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  WhatsApp Query
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
