"use client";

import React, { useState } from "react";
import { BOILER_BRANDS, CONTRACTOR_DATA, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import { Wrench, AlertCircle, CheckCircle2, ShieldCheck, MessageSquare, Phone, ChevronRight } from "lucide-react";

export function BoilerBrandMatrix() {
  const [activeBrandName, setActiveBrandName] = useState<string>(BOILER_BRANDS[0].name);

  const activeBrand = BOILER_BRANDS.find((b) => b.name === activeBrandName) || BOILER_BRANDS[0];

  return (
    <section
      id="brands"
      className="py-16 lg:py-24 bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 transition-colors"
      aria-label="Supported Boiler Brands and Common Fault Codes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            OEM Parts & Fault Code Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Major UK Boiler Brands We Repair Same-Day
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Our vans are mobile supply depots carrying genuine OEM replacement pumps, divertor valves, and PCBs for all major UK boiler models.
          </p>
        </div>

        {/* Brand Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Boiler Brands">
          {BOILER_BRANDS.map((brand) => {
            const isSelected = brand.name === activeBrandName;
            return (
              <button
                key={brand.name}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveBrandName(brand.name)}
                className={`px-5 py-3 rounded-2xl text-sm font-black transition-all border flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <span>{brand.name}</span>
                <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md ${
                  isSelected ? "bg-slate-950/20 text-slate-950" : "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400"
                }`}>
                  {brand.badge.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Brand Deep Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border-2 border-amber-500/20 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-500">
                  Manufacturer Support Profile
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  {activeBrand.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                {activeBrand.name} Specialists
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {activeBrand.notes}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={buildWhatsAppEmergencyUrl({ boilerBrand: activeBrand.name })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                WhatsApp {activeBrand.name} Fault
              </a>
              <a
                href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call Engineer
              </a>
            </div>
          </div>

          {/* Fault Code Breakdown */}
          <div className="pt-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              Common {activeBrand.name} Error Codes & Rapid On-Site Solutions:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeBrand.commonFaults.map((fault, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block text-xs font-black px-2 py-0.5 rounded bg-flame-100 dark:bg-flame-950/80 text-flame-700 dark:text-flame-300 font-mono mb-2">
                      Code: {fault.code}
                    </div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white leading-snug">
                      {fault.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                    <strong className="text-amber-600 dark:text-amber-400">Our Fix:</strong> {fault.action}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
