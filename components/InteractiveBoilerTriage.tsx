"use client";

import React, { useState } from "react";
import {
  TRIAGE_ISSUES,
  BOILER_BRANDS,
  SUBURB_COVERAGE,
  CONTRACTOR_DATA,
  buildWhatsAppEmergencyUrl,
  ITriageIssue
} from "@/lib/contractor-data";
import {
  Flame,
  AlertOctagon,
  AlertTriangle,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Droplets
} from "lucide-react";

export function InteractiveBoilerTriage() {
  const [selectedIssueId, setSelectedIssueId] = useState<string>("boiler-lockout-no-heat");
  const [selectedBrand, setSelectedBrand] = useState<string>("Worcester Bosch");
  const [selectedLocation, setSelectedLocation] = useState<string>("Bolton (BL1 - BL2)");
  const [propertyType, setPropertyType] = useState<string>("Residential Homeowner");

  const activeIssue = TRIAGE_ISSUES.find((issue) => issue.id === selectedIssueId) || TRIAGE_ISSUES[0];

  const propertyTypes = [
    "Residential Homeowner",
    "Landlord / Letting Agent",
    "Tenant (Emergency)",
    "Commercial Property"
  ];

  const whatsappUrl = buildWhatsAppEmergencyUrl({
    issueTitle: activeIssue.title,
    boilerBrand: selectedBrand,
    postcode: selectedLocation,
    propertyType: propertyType,
  });

  return (
    <section
      id="triage"
      className="py-16 lg:py-24 bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 transition-colors"
      aria-label="Interactive UK Boiler Fault Triage Tool"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            1-Tap Emergency Fault Triage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Diagnose Your Heating Emergency in 30 Seconds
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Select your symptom below to get instant diagnostic guidance and dispatch our nearest on-duty Gas Safe engineer across Bolton.
          </p>
        </div>

        {/* Triage Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Fault Symptom */}
            <div className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 inline-flex items-center justify-center text-xs font-black">1</span>
                  Select Your Emergency Symptom:
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">5 Common Scenarios</span>
              </div>

              <div className="space-y-2.5" role="radiogroup" aria-label="Boiler Fault Symptoms">
                {TRIAGE_ISSUES.map((issue) => {
                  const isSelected = issue.id === selectedIssueId;
                  const isGasAlert = issue.id === "gas-smell-safety-shutoff";

                  return (
                    <button
                      key={issue.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedIssueId(issue.id)}
                      className={`w-full p-4 rounded-2xl text-left transition-all border flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isSelected
                          ? isGasAlert
                            ? "bg-red-50 dark:bg-red-950/40 border-red-500 shadow-sm"
                            : "bg-amber-50 dark:bg-amber-950/30 border-amber-500 shadow-sm"
                          : "bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                            isSelected
                              ? isGasAlert
                                ? "border-red-600 bg-red-600 text-white"
                                : "border-amber-500 bg-amber-500 text-slate-950"
                              : "border-slate-400 dark:border-slate-600"
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-current" />}
                        </div>
                        <div>
                          <div className={`text-sm font-bold ${
                            isSelected
                              ? isGasAlert
                                ? "text-red-700 dark:text-red-400"
                                : "text-amber-700 dark:text-amber-300"
                              : "text-slate-900 dark:text-slate-100"
                          }`}>
                            {issue.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {issue.commonRoot}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap ${
                          issue.severityColor === "red"
                            ? "bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300"
                            : issue.severityColor === "orange"
                            ? "bg-orange-100 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300"
                            : "bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300"
                        }`}
                      >
                        {issue.severity.split("/")[0].trim()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 & 3: Configuration (Boiler Brand, Postcode, Property) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md">
              
              {/* Boiler Make */}
              <div>
                <label htmlFor="boiler-brand-select" className="block text-xs font-black uppercase tracking-wider text-amber-500 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 inline-flex items-center justify-center text-xs font-black mr-1.5">2</span>
                  Boiler Make:
                </label>
                <select
                  id="boiler-brand-select"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
                >
                  {BOILER_BRANDS.map((b) => (
                    <option key={b.name} value={b.name}>
                      {b.name} (OEM Stocked)
                    </option>
                  ))}
                  <option value="Potterton">Potterton</option>
                  <option value="Main / Vokera">Main / Vokera</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>

              {/* Area / Postcode */}
              <div>
                <label htmlFor="location-area-select" className="block text-xs font-black uppercase tracking-wider text-amber-500 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 inline-flex items-center justify-center text-xs font-black mr-1.5">3</span>
                  Bolton & GM Postcode:
                </label>
                <select
                  id="location-area-select"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
                >
                  {SUBURB_COVERAGE.map((area) => (
                    <option key={area.town} value={`${area.town} (${area.postcode})`}>
                      {area.town} ({area.postcode}) — ETA: {area.eta}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Property Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {propertyTypes.map((pt) => (
                    <button
                      key={pt}
                      type="button"
                      onClick={() => setPropertyType(pt)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold text-center border transition-all ${
                        propertyType === pt
                          ? "bg-slate-900 dark:bg-white text-amber-400 dark:text-slate-950 border-slate-900 dark:border-white shadow-sm"
                          : "bg-slate-50 dark:bg-slate-850 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400"
                      }`}
                    >
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Diagnostic Output & 1-Tap SOS Dispatch Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-amber-500/40 dark:border-amber-500/30 shadow-2xl shadow-amber-500/10 space-y-6">
              
              {/* Header Status & Severity */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-500">
                    Live Triage Diagnosis
                  </span>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white leading-tight">
                    {activeIssue.title.split("(")[0]}
                  </h3>
                </div>
                <span className="text-xs font-black uppercase px-2.5 py-1 rounded-full bg-flame-500/15 border border-flame-500/30 text-flame-600 dark:text-flame-400">
                  {activeIssue.severity}
                </span>
              </div>

              {/* Safety Warning (if applicable) */}
              {activeIssue.safetyWarning && (
                <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-300 text-xs leading-relaxed space-y-1">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    Safety Priority:
                  </div>
                  <p>{activeIssue.safetyWarning}</p>
                </div>
              )}

              {/* Root Cause & Recommended Action */}
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Probable Fault Mechanism:
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {activeIssue.commonRoot}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Required Gas Safe Action:
                  </span>
                  <p className="font-medium text-slate-700 dark:text-slate-300 mt-0.5 text-xs">
                    {activeIssue.recommendedAction}
                  </p>
                </div>
              </div>

              {/* Preliminary Safe DIY Steps Accordion */}
              {activeIssue.diySafeTips && (
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                    <Wrench className="w-3.5 h-3.5 text-amber-500" />
                    Safe Checks While Waiting for Engineer:
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 list-disc list-inside">
                    {activeIssue.diySafeTips.map((tip, idx) => (
                      <li key={idx} className="leading-snug">{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 1-Tap SOS Dispatch Actions */}
              <div className="space-y-3 pt-2">
                {/* 1-Tap WhatsApp SOS */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl font-black text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
                  aria-label="Dispatch Gas Safe Engineer via WhatsApp with pre-filled triage details"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>1-Tap WhatsApp SOS Dispatch (Pre-filled)</span>
                </a>

                {/* Direct Phone Dispatch */}
                <a
                  href={`tel:${CONTRACTOR_DATA.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-flame-500 hover:from-amber-300 hover:to-flame-400 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-amber-500/50"
                  aria-label={`Call Emergency Gas Safe Line at ${CONTRACTOR_DATA.phoneDisplay}`}
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse" />
                  <span>Call Emergency Hotline: {CONTRACTOR_DATA.phoneDisplay}</span>
                </a>
              </div>

              {/* Micro Trust Guarantee */}
              <div className="pt-2 text-center text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                ⚡ Fixed £79 Diagnostic (100% credited to repair) • No Hidden Fees
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
