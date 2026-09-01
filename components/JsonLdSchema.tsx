import React from "react";
import { CONTRACTOR_DATA, PRICING_TIERS, VERIFIED_REVIEWS } from "@/lib/contractor-data";

export function JsonLdSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["EmergencyService", "Plumber", "HVACBusiness", "LocalBusiness"],
    "@id": "https://gaslegend-bolton.co.uk/#business",
    name: CONTRACTOR_DATA.businessName,
    alternateName: "GasLegend Bolton Emergency Plumber",
    description: "24/7 Gas Safe emergency heating & boiler repair specialists covering Bolton (BL1-BL7) and Greater Manchester. Rapid 30-45 minute average response time for boiler lockouts, burst pipes, and heating failures.",
    url: "https://gaslegend-bolton.co.uk",
    telephone: CONTRACTOR_DATA.phoneRaw,
    priceRange: "££",
    image: "https://gaslegend-bolton.co.uk/gas-safe-hero.jpg",
    logo: "https://gaslegend-bolton.co.uk/gas-safe-badge.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTRACTOR_DATA.baseLocation.address,
      addressLocality: CONTRACTOR_DATA.baseLocation.locality,
      addressRegion: CONTRACTOR_DATA.baseLocation.region,
      postalCode: CONTRACTOR_DATA.baseLocation.postalCode,
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTRACTOR_DATA.baseLocation.coordinates.latitude,
      longitude: CONTRACTOR_DATA.baseLocation.coordinates.longitude
    },
    areaServed: CONTRACTOR_DATA.serviceAreas.map((area) => ({
      "@type": "City",
      name: area
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CONTRACTOR_DATA.rating.toString(),
      reviewCount: CONTRACTOR_DATA.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Emergency Heating & Plumbing Services",
      itemListElement: PRICING_TIERS.map((tier, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tier.service,
          description: tier.creditTerms
        },
        price: tier.cost.replace(/[^0-9]/g, "") || "79",
        priceCurrency: "GBP",
        position: index + 1
      }))
    },
    review: VERIFIED_REVIEWS.map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author
      },
      datePublished: "2026-02-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.rating.toString(),
        bestRating: "5"
      },
      reviewBody: rev.comment
    })),
    sameAs: [
      "https://www.gassaferegister.co.uk",
      "https://www.google.com/maps"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
