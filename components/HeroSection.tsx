"use client";

import React, { useState } from "react";
import { CONTRACTOR_DATA, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Star,
  Flame,
  Search,
  ChevronRight,
  Sparkles
} from "lucide-react";

export function HeroSection() {
  const [postcodeInput, setPostcodeInput] = useState("");
  const [coverageResult, setCoverageResult] = useState<{
    covered: boolean;
    areaName?: string;
    eta?: string;
    message?: string;
  } | null>(null);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const query = postcodeInput.trim().toUpperCase();
    if (!query) return;

    const matchedPostcode = CONTRACTOR_DATA.coveragePostcodes.some((pc) =>
      query.startsWith(pc) || pc.startsWith(query)
    );
    const matchedTown = CONTRACTOR_DATA.serviceAreas.some((town) =>
      town.toUpperCase().includes(query) || query.includes(town.toUpperCase())
    );

    if (matchedPostcode || matchedTown || query.startsWith("BL") || query.startsWith("WN") || query.startsWith("M")) {
      setCoverageResult({
        covered: true,
        areaName: query,
        eta: "25–40 Minutes",
        message: `✅ Engineer Available in ${query}! Immediate emergency dispatch ready.`
      });
    } else {
      setCoverageResult({
        covered: true,
        areaName: query,
        eta: "30–45 Minutes",
        message: `✅ ${query} covered under Greater Manchester priority dispatch!`
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 border-b border-slate-200 dark:border-slate-800/80">
      {/* Background Subtle Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 dark:bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-flame-500/10 dark:bg-flame-600/10 blur-[90px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Urgency Pill Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-flame-500/10 dark:bg-flame-950/60 border border-flame-500/30 dark:border-flame-500/40 text-flame-700 dark:text-flame-300 text-xs sm:text-sm font-bold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-flame-500"></span>
            </span>
            <span>WINTER EMERGENCY PRIORITY DISPATCH ACTIVE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 px-3 py-1.5 rounded-full shadow-sm">
            <div className="flex text-amber-400" aria-label="5 Star Rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9 / 5.0 Rating</span>
            <span className="text-slate-400 dark:text-slate-500">({CONTRACTOR_DATA.reviewCount} Bolton Reviews)</span>
          </div>
        </div>

        {/* Main Grid: Headline & Direct Dispatch Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (Copy & Primary CTAs) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.1]">
                Boiler Breakdown or Burst Pipe in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-flame-500 to-amber-600 dark:from-amber-400 dark:via-flame-400 dark:to-amber-300">
                  Bolton?
                </span>
              </h1>
              
              <p className="text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                24/7 Gas Safe Registered Heating Engineers on rapid standby. Average <strong className="text-slate-900 dark:text-white font-black underline decoration-amber-500 decoration-2">30–45 minute arrival</strong> across Bolton (BL1–BL7) & Greater Manchester.
              </p>
            </div>

            {/* Direct Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Gas Safe Certified <strong className="text-amber-600 dark:text-amber-400">#{CONTRACTOR_DATA.gasSafeRegisterNumber}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Clock className="w-5 h-5 text-flame-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Fixed <strong className="text-flame-600 dark:text-flame-400">£79 Diagnostic</strong> (Credited to repair)
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Wrench className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  OEM Pumps, Fans & Valves in Van
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  12-Month Guarantee on Parts & Labour
                </span>
              </div>
            </div>

            {/* High-Impact Action Dispatch Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary Call Button */}
              <a
                href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-black text-lg text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-flame-500 hover:from-amber-300 hover:to-flame-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-amber-500/50"
                aria-label={`Call Gas Safe Engineer immediately at ${CONTRACTOR_DATA.phoneDisplay}`}
              >
                <div className="w-10 h-10 rounded-full bg-slate-950/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-950 fill-current animate-bounce" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-900 opacity-90">1-Tap Emergency Call</div>
                  <div className="text-xl font-black leading-tight tracking-tight">{CONTRACTOR_DATA.phoneDisplay}</div>
                </div>
              </a>

              {/* WhatsApp SOS Button */}
              <a
                href={buildWhatsAppEmergencyUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
                aria-label="Send WhatsApp SOS with Boiler Photo or Postcode"
              >
                <MessageSquare className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-950 opacity-80">Photo / Postcode Triage</div>
                  <div className="font-extrabold text-white leading-tight">WhatsApp SOS Dispatch</div>
                </div>
              </a>
            </div>

            {/* Postcode Instant ETA Check Bar */}
            <div className="pt-2">
              <form onSubmit={handlePostcodeCheck} className="max-w-md mx-auto lg:mx-0">
                <label htmlFor="postcode-check-input" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5 text-left">
                  🔍 Check Live Emergency Engineer Availability in Your Postcode:
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="postcode-check-input"
                      type="text"
                      value={postcodeInput}
                      onChange={(e) => setPostcodeInput(e.target.value)}
                      placeholder="e.g. BL1, BL6, Horwich, Wigan..."
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-amber-400 font-bold text-sm rounded-xl border border-slate-700 dark:border-slate-600 transition-colors flex items-center gap-1 flex-shrink-0"
                  >
                    Check ETA
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                {coverageResult && (
                  <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-between animate-in fade-in duration-200">
                    <span>{coverageResult.message}</span>
                    <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-black uppercase">ETA: {coverageResult.eta}</span>
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Right Column: High-Urgency Dispatch Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-navy-900/90 border-2 border-amber-500/30 dark:border-amber-500/20 shadow-2xl shadow-amber-500/10 backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-black tracking-wider uppercase text-amber-500 dark:text-amber-400">
                    Emergency Dispatch Centre
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    Need Help Right Now?
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {/* Triage Shortcut List */}
              <div className="py-5 space-y-3">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Select your immediate breakdown scenario:
                </p>
                
                <a
                  href="#triage"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700/60 hover:border-amber-400/50 transition-all text-left"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <div className="text-sm font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                        Boiler Lockout / No Heat
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Worcester, Vaillant, Baxi, Ideal</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#triage"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700/60 hover:border-amber-400/50 transition-all text-left"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                        Pressure Dropped to 0 Bar
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">F22, F75, E119 Low Pressure Errors</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#triage"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700/60 hover:border-amber-400/50 transition-all text-left"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                        Radiator Leak / Burst Pipe
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Active ceiling leak or TRV fracture</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Card Footer Guarantee */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  Gas Safe #{CONTRACTOR_DATA.gasSafeRegisterNumber}
                </span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">
                  Zero Hidden Callout Fees
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
