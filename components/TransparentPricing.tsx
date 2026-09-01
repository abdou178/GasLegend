"use client";

import React from "react";
import { PRICING_TIERS, CONTRACTOR_DATA, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import { CheckCircle2, ShieldCheck, Phone, MessageSquare, AlertCircle, Sparkles, HelpCircle } from "lucide-react";

export function TransparentPricing() {
  return (
    <section
      id="pricing"
      className="py-16 lg:py-24 bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 transition-colors"
      aria-label="Fixed and Transparent Heating and Plumbing Pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            No Hidden Fees • Upfront Price Guarantee
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Clear, Honest Pricing with Zero Surprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We believe in complete financial transparency. Our fixed diagnostic fee is 100% credited towards your repair invoice if you proceed with our fix.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all ${
                tier.highlight
                  ? "bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-white dark:to-navy-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/15 scale-105 z-10"
                  : "bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg"
              }`}
            >
              <div>
                {/* Highlight Ribbon */}
                {tier.highlight && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow-sm">
                      <Sparkles className="w-3 h-3" /> Most Common Emergency Action
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-black text-slate-950 dark:text-white leading-tight mb-2">
                  {tier.service}
                </h3>

                {/* Price Display */}
                <div className="my-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                      {tier.cost}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      / fixed rate
                    </span>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-300 font-bold mt-2 leading-snug">
                    {tier.creditTerms}
                  </p>
                </div>

                {/* Feature Inclusions */}
                <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                  {tier.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action CTA */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
                  className={`w-full py-3 px-4 rounded-xl text-center font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    tier.highlight
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-500/25"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  Book {tier.service.split("(")[0]}
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* The GasLegend Price Promise Checklist */}
        <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black mx-auto md:mx-0">
                1
              </div>
              <h4 className="text-base font-black text-slate-900 dark:text-white">
                Written Quote Before We Turn a Screw
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                After the electronic diagnosis, our engineer gives you a clear written quote. You are never committed until you approve the price.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black mx-auto md:mx-0">
                2
              </div>
              <h4 className="text-base font-black text-slate-900 dark:text-white">
                £79 Diagnostic Fully Credited
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                When you proceed with the repair on site, your £79 diagnostic fee is deducted in full from the final invoice.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black mx-auto md:mx-0">
                3
              </div>
              <h4 className="text-base font-black text-slate-900 dark:text-white">
                12-Month Guarantee on Parts & Labour
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                If the replacement part fails within 12 months, our Gas Safe engineer returns and rectifies it with zero charge.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
