"use client";

import React from "react";
import { VERIFIED_REVIEWS, CONTRACTOR_DATA } from "@/lib/contractor-data";
import { Star, ShieldCheck, CheckCircle2, Quote, MapPin, Wrench } from "lucide-react";

export function VerifiedReviews() {
  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 transition-colors"
      aria-label="Verified Customer Reviews in Bolton and Greater Manchester"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Local Google Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Trusted by 500+ Homes Across Bolton
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Read unedited reviews from homeowners, landlords, and property managers who called us during freezing winter outages and pipe emergencies.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left leading-none">
              <span className="text-sm font-black text-slate-900 dark:text-white">
                {CONTRACTOR_DATA.rating} / 5.0 Star Rating
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                Based on {CONTRACTOR_DATA.reviewCount} verified Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-amber-400/50 dark:hover:border-amber-500/40 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {review.date}
                  </span>
                </div>

                {/* Repair Context Pill */}
                <div className="mb-3 p-2 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-750 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-amber-500" />
                    {review.boilerMake}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                    Issue: {review.issue}
                  </div>
                </div>

                {/* Review Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Review Author & Location Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    {review.author}
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-current text-white" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    {review.location}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                  Verified Visit
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
