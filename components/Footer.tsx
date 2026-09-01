"use client";

import React, { useState } from "react";
import { CONTRACTOR_DATA, FAQS, buildWhatsAppEmergencyUrl } from "@/lib/contractor-data";
import {
  Flame,
  ShieldCheck,
  Phone,
  MessageSquare,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Award,
  CheckCircle2
} from "lucide-react";

export function Footer() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <footer className="bg-slate-900 dark:bg-navy-950 text-slate-300 border-t border-slate-800 transition-colors pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Gas Make-Safe Emergency Banner */}
        <div id="gas-safe-guide" className="p-8 rounded-3xl bg-red-950/40 border-2 border-red-500/40 text-slate-100 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 animate-pulse">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">
                Smelling Gas? UK Gas Emergency Make-Safe Checklist
              </h3>
              <p className="text-xs text-red-200">
                Follow these critical safety steps immediately before our engineer arrives:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-red-500/30 text-xs space-y-1">
              <div className="font-bold text-red-400">1. Open Windows & Doors</div>
              <p className="text-slate-300">Create cross-ventilation to disperse concentrated gas fumes safely.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/40 border border-red-500/30 text-xs space-y-1">
              <div className="font-bold text-red-400">2. No Electrical Switches</div>
              <p className="text-slate-300">Do NOT turn lights, appliances, doorbells, or sockets on or off.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/40 border border-red-500/30 text-xs space-y-1">
              <div className="font-bold text-red-400">3. Turn Off Gas Meter Valve</div>
              <p className="text-slate-300">Rotate the emergency control valve next to your gas meter a quarter turn.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/40 border border-red-500/30 text-xs space-y-1">
              <div className="font-bold text-red-400">4. Evacuate & Call Us</div>
              <p className="text-slate-300">Step outside into fresh air and call 07943 123456 or National Gas 0800 111 999.</p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) Accordion */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              Common Enquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Frequently Asked Heating & Emergency Questions
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-850/60 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <span className="text-amber-400 font-mono text-xs">Q{index + 1}.</span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Directory & Accreditations 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-800 text-xs">
          
          {/* Column 1: Brand & Registration */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <span className="text-lg font-black text-white">GasLegend</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              24/7 Gas Safe emergency boiler repairs, central heating maintenance, and emergency plumbing across Bolton & Greater Manchester.
            </p>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 space-y-1">
              <div className="font-bold text-amber-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Gas Safe Register #{CONTRACTOR_DATA.gasSafeRegisterNumber}
              </div>
              <div>£5,000,000 Public Liability Insurance Underwritten</div>
            </div>
          </div>

          {/* Column 2: Emergency Contact & Base */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider text-amber-400">
              Emergency Dispatch
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
                className="flex items-center gap-2 font-bold text-white hover:text-amber-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                {CONTRACTOR_DATA.phoneDisplay} (24/7 Hotline)
              </a>
              <a
                href={buildWhatsAppEmergencyUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-[#25D366] hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct Dispatch
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span>Bolton Hub, BL1 1AA, Greater Manchester, UK</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>365 Days a Year / 24 Hours Standby</span>
              </div>
            </div>
          </div>

          {/* Column 3: Postcode Coverage Directory */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider text-amber-400">
              Bolton & GM Postcodes
            </h4>
            <div className="grid grid-cols-2 gap-1 text-slate-400">
              <span>• BL1: Bolton Central</span>
              <span>• BL2: Bradshaw / Tonge</span>
              <span>• BL3: Little Lever / Daubhill</span>
              <span>• BL4: Farnworth / Kearsley</span>
              <span>• BL5: Westhoughton</span>
              <span>• BL6: Horwich / Blackrod</span>
              <span>• BL7: Bromley Cross</span>
              <span>• BL8 / BL9: Bury Hub</span>
              <span>• WN1 / WN2: Wigan</span>
              <span>• M26 / M28: Radcliffe</span>
            </div>
          </div>

          {/* Column 4: Manufacturer Accreditations */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider text-amber-400">
              Accreditations & Guarantees
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Worcester Bosch Accredited
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Vaillant Advance Certified
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Ideal Max Accredited Partner
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Baxi Approved Heating Engineer
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> 12-Month Guarantee on Parts & Labour
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Notice */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {CONTRACTOR_DATA.businessName}. All rights reserved. Registered Gas Safe Business #{CONTRACTOR_DATA.gasSafeRegisterNumber}.
          </div>
          <div className="flex items-center gap-4">
            <a href="#triage" className="hover:text-slate-400">Emergency Triage</a>
            <span>•</span>
            <a href="#pricing" className="hover:text-slate-400">Fixed Pricing</a>
            <span>•</span>
            <a href="#coverage" className="hover:text-slate-400">Bolton Postcodes</a>
            <span>•</span>
            <a href="#gas-safe-guide" className="hover:text-slate-400">Gas Make-Safe Guide</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
