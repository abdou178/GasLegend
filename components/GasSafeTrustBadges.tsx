"use client";

import React from "react";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";
import { ShieldCheck, Award, FileCheck, CheckCircle2, Lock, Flame } from "lucide-react";

export function GasSafeTrustBadges() {
  const badges = [
    {
      title: "Gas Safe Register Certified",
      subtitle: `Registration #${CONTRACTOR_DATA.gasSafeRegisterNumber}`,
      description: "Legally qualified to work on domestic gas boilers, pipework, and combustion flues across the UK.",
      icon: ShieldCheck,
      highlight: true
    },
    {
      title: "12-Month Written Guarantee",
      subtitle: "Parts & Labour Protected",
      description: "All genuine OEM replacement pumps, PCBs, and valves come backed with our 12-month peace-of-mind warranty.",
      icon: Award,
      highlight: false
    },
    {
      title: "£5,000,000 Public Liability",
      subtitle: "Fully Insured & Underwritten",
      description: "Complete commercial and domestic indemnity coverage for all emergency heating and plumbing works.",
      icon: Lock,
      highlight: false
    },
    {
      title: "Major Brand Accredited",
      subtitle: "Worcester, Vaillant, Baxi, Ideal",
      description: "Direct manufacturer accreditation granting access to OEM parts catalogues and technical schematics.",
      icon: Flame,
      highlight: false
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-navy-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-3xl border transition-all ${
                  badge.highlight
                    ? "bg-gradient-to-b from-amber-500/10 to-amber-500/5 dark:from-amber-500/15 dark:to-navy-900 border-amber-500/40 shadow-lg shadow-amber-500/5"
                    : "bg-slate-50 dark:bg-slate-850/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    badge.highlight
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                      : "bg-slate-200 dark:bg-slate-800 text-amber-500"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white leading-snug">
                      {badge.title}
                    </h3>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Official Gas Safe Legal Notice Bar */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
            <span>
              <strong>UK Gas Safety Compliance:</strong> It is illegal for non-registered plumbers to work on gas appliances. Always verify our engineer&apos;s Gas Safe ID card upon arrival.
            </span>
          </div>
          <a
            href="https://www.gassaferegister.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-amber-700 dark:text-amber-400 hover:underline flex-shrink-0"
          >
            Verify on GasSafeRegister.co.uk →
          </a>
        </div>

      </div>
    </section>
  );
}
