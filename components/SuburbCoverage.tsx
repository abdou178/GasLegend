"use client";

import React, { useState } from "react";
import { SUBURB_COVERAGE, CONTRACTOR_DATA, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import { MapPin, Navigation, Clock, ShieldCheck, Phone, MessageSquare, Search, Sparkles } from "lucide-react";

export function SuburbCoverage() {
  const [filterQuery, setFilterQuery] = useState("");

  const filteredAreas = SUBURB_COVERAGE.filter((area) => {
    const q = filterQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      area.town.toLowerCase().includes(q) ||
      area.postcode.toLowerCase().includes(q)
    );
  });

  return (
    <section
      id="coverage"
      className="py-16 lg:py-24 bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 transition-colors"
      aria-label="Bolton and Greater Manchester Service Coverage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Bolton & Greater Manchester Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Fast Emergency Response in Your Postcode
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Our mobile heating engineers are strategically stationed throughout Bolton, Bury, and Wigan to guarantee emergency arrival within 30–45 minutes.
          </p>

          {/* Search Filter Box */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter by town or postcode (e.g. BL6, Horwich, Bury)..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-amber-400/60 dark:hover:border-amber-500/50 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold bg-slate-200 dark:bg-slate-750 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700">
                    {area.postcode}
                  </span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                    area.activeStatus === "High Van Density"
                      ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                      : "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800"
                  }`}>
                    {area.activeStatus}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">
                  {area.town}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-semibold mb-4">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  Estimated Emergency Arrival: <strong className="text-amber-600 dark:text-amber-400 font-black">{area.eta}</strong>
                </div>
              </div>

              {/* Area Quick Dispatch */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <a
                  href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  Call Engineer
                </a>

                <a
                  href={buildWhatsAppEmergencyUrl({ postcode: `${area.town} (${area.postcode})` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  WhatsApp
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Can't see your postcode notice */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-slate-100 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto">
          <h4 className="text-sm font-black text-slate-900 dark:text-white mb-1">
            Living just outside Bolton or in surrounding Lancashire?
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
            We regularly dispatch priority emergency vans to Wigan, Atherton, Tyldesley, Swinton, and Leigh. Call our dispatch desk to check real-time availability.
          </p>
          <a
            href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2 text-xs font-black text-amber-600 dark:text-amber-400 hover:underline"
          >
            <Phone className="w-3.5 h-3.5" /> Call Dispatch Hotline: {CONTRACTOR_DATA.phoneDisplay} →
          </a>
        </div>

      </div>
    </section>
  );
}
