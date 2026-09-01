"use client";

import React from "react";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";
import { Phone, Clock, Flame, ShieldCheck, MapPin } from "lucide-react";

export function EmergencyTopBanner() {
  return (
    <div
      role="banner"
      aria-label="Emergency Dispatch Status"
      className="bg-navy-950 text-white border-b border-amber-500/20 text-xs sm:text-sm py-2 px-3 sm:px-6 relative z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left Status Indicator */}
        <div className="flex items-center flex-wrap justify-center sm:justify-start gap-2.5">
          <span className="inline-flex items-center gap-1.5 bg-flame-600/20 border border-flame-500/40 text-flame-400 px-2 py-0.5 rounded-full font-semibold text-[11px] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-flame-500 animate-pulse" aria-hidden="true" />
            24/7 Live Emergency Standby
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-gasgold-400" aria-hidden="true" />
            <strong className="text-white">Bolton & Greater Manchester Hub:</strong> 3 Engineers Active
          </span>
          <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-gasgold-400" aria-hidden="true" />
            Avg ETA: <strong className="text-gasgold-300">{CONTRACTOR_DATA.avgArrivalTime}</strong>
          </span>
        </div>

        {/* Right Action Trigger */}
        <div className="flex items-center gap-3 sm:gap-5 text-xs">
          <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-gasgold-400" aria-hidden="true" />
            Gas Safe <span className="text-gasgold-400 font-bold">#{CONTRACTOR_DATA.gasSafeRegisterNumber}</span>
          </span>
          <span className="hidden xl:inline text-slate-400">
            Fixed £79 Diagnostic (Credited to repair)
          </span>
          <a
            href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
            className="inline-flex items-center gap-1.5 font-bold text-gasgold-400 hover:text-gasgold-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gasgold-400 rounded px-1.5 py-0.5 bg-white/5 border border-gasgold-500/30"
            aria-label={`Call Emergency Hotline direct on ${CONTRACTOR_DATA.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 text-flame-400 animate-bounce" aria-hidden="true" />
            <span className="tracking-wide">Direct Line: {CONTRACTOR_DATA.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
