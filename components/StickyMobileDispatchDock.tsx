"use client";

import React from "react";
import { CONTRACTOR_DATA, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import { Phone, MessageSquare, ShieldCheck, Clock, Flame } from "lucide-react";

export function StickyMobileDispatchDock() {
  const whatsappUrl = buildWhatsAppEmergencyUrl({});

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] transition-colors"
      role="region"
      aria-label="Emergency Dispatch Quick Actions"
    >
      <div className="max-w-md mx-auto space-y-2">
        
        {/* Micro Status Pill */}
        <div className="flex items-center justify-between px-2 text-[10px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1 text-flame-600 dark:text-flame-400">
            <span className="w-2 h-2 rounded-full bg-flame-500 animate-pulse" />
            Bolton Standby: 3 Engineers Active
          </span>
          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
            <ShieldCheck className="w-3 h-3" />
            Gas Safe #{CONTRACTOR_DATA.gasSafeRegisterNumber}
          </span>
        </div>

        {/* Dual 1-Tap Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          
          {/* 1-Tap Call */}
          <a
            href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-flame-500 shadow-md shadow-amber-500/20 active:scale-95 transition-all text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label={`Call Gas Safe Engineer at ${CONTRACTOR_DATA.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 fill-current animate-pulse flex-shrink-0" />
            <div className="leading-tight">
              <div className="text-[9px] uppercase font-black tracking-wider text-slate-900 opacity-90">Instant Call</div>
              <div className="font-black text-xs">{CONTRACTOR_DATA.phoneDisplay}</div>
            </div>
          </a>

          {/* 1-Tap WhatsApp SOS */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-black text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 active:scale-95 transition-all text-center focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            aria-label="Open WhatsApp for Emergency SOS Dispatch"
          >
            <MessageSquare className="w-4 h-4 fill-current flex-shrink-0" />
            <div className="leading-tight">
              <div className="text-[9px] uppercase font-black tracking-wider text-emerald-950 opacity-80">Photo Triage</div>
              <div className="font-black text-xs">WhatsApp SOS</div>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
}
