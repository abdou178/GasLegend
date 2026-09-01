export interface ITriageIssue {
  id: string;
  title: string;
  severity: "High Emergency / Winter Priority" | "Urgent" | "Emergency (Sub-zero weather)" | "Critical SOS / Property Flood Risk" | "Immediate Gas Safety Alert";
  severityColor: "red" | "orange" | "amber" | "yellow";
  commonRoot: string;
  recommendedAction: string;
  safetyWarning?: string;
  whatsappMessageTemplate: string;
  diySafeTips?: string[];
}

export interface ICoreService {
  id: string;
  title: string;
  tagline: string;
  scope: string;
  keyPoints: string[];
  icon: string;
  pricingNote: string;
}

export interface IBoilerBrand {
  name: string;
  logoText: string;
  badge: string;
  commonFaults: {
    code: string;
    description: string;
    action: string;
  }[];
  notes: string;
}

export interface IAreaCoverage {
  town: string;
  postcode: string;
  eta: string;
  activeStatus: "High Van Density" | "Engineer On Standby" | "Fast Dispatch";
  distanceKm: number;
}

export interface IPricingTier {
  service: string;
  cost: string;
  includes: string[];
  highlight?: boolean;
  creditTerms: string;
}

export interface IReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  boilerMake: string;
  issue: string;
  comment: string;
  verified: boolean;
}

export interface IFaqItem {
  question: string;
  answer: string;
  category: "Emergency" | "Pricing" | "Gas Safe" | "Coverage";
}

export const CONTRACTOR_DATA = {
  businessName: "GasLegend Emergency Heating & Plumbing",
  shortName: "GasLegend",
  tagline: "24/7 Gas Safe Heating & Emergency Plumber",
  subTagline: "Rapid 30–45 Min Response Across Bolton & Greater Manchester",
  phoneRaw: "+447943123456",
  phoneDisplay: "07943 123456",
  phoneEmergency: "07943 123456",
  whatsappNumber: "447943123456",
  gasSafeRegisterNumber: "941824",
  rating: 4.9,
  reviewCount: 48,
  avgArrivalTime: "30–45 Minutes",
  diagnosticFee: "£79",
  diagnosticFeeTerms: "100% Credited towards your repair cost if you proceed with our on-site fix",
  guaranteeTerms: "12-Month Guarantee on all OEM parts and Gas Safe certified labour",
  publicLiability: "£5,000,000 Public Liability Insurance",
  baseLocation: {
    address: "Bolton Town Centre & Greater Manchester Hub",
    locality: "Bolton",
    region: "Greater Manchester",
    postalCode: "BL1 1AA",
    country: "UK",
    coordinates: {
      latitude: 53.5769,
      longitude: -2.4282,
    },
  },
  emergencyHours: "24 Hours / 7 Days a Week / 365 Days a Year (Including Bank Holidays & Christmas)",
  coveragePostcodes: [
    "BL1", "BL2", "BL3", "BL4", "BL5", "BL6", "BL7",
    "M26", "M28", "M38", "M45", "WN1", "WN2", "WN7"
  ],
  serviceAreas: [
    "Bolton Central",
    "Horwich",
    "Westhoughton",
    "Farnworth",
    "Bury",
    "Wigan",
    "Little Lever",
    "Bromley Cross",
    "Radcliffe",
    "Kearsley",
    "Blackrod",
    "Lostock"
  ],
  accreditations: [
    "Gas Safe Register Official (#941824)",
    "Worcester Bosch Accredited Installer",
    "Vaillant Advance Certified Specialist",
    "Ideal Max Accredited Partner",
    "Baxi Approved Heating Engineer",
    "City & Guilds Level 3 Gas & Plumbing",
    "£5M Public Liability Underwritten"
  ]
};

export const TRIAGE_ISSUES: ITriageIssue[] = [
  {
    id: "boiler-lockout-no-heat",
    title: "Total Boiler Lockout / No Heating & Hot Water",
    severity: "High Emergency / Winter Priority",
    severityColor: "red",
    commonRoot: "Ignition lockout, faulty diverter valve, flame rectification rod failure, or PCB communication error.",
    recommendedAction: "Dispatch emergency Gas Safe engineer with diagnostic kit and genuine OEM replacement pumps/valves.",
    safetyWarning: "Do not attempt to repeatedly force-reset the boiler more than twice, as this can flood the combustion chamber.",
    whatsappMessageTemplate: "URGENT: Total Boiler Lockout with No Heating or Hot Water.",
    diySafeTips: [
      "Check if your gas supply is active by testing other gas appliances (e.g. gas hob).",
      "Check your boiler's digital display for an error code (e.g. EA, F28, F75, E133).",
      "Attempt a single soft reset using the reset dial/button. If lockout persists, call our Gas Safe engineer."
    ]
  },
  {
    id: "low-boiler-pressure",
    title: "Boiler Pressure Dropped to 0 Bar (F22 / F75 / Low Pressure Fault)",
    severity: "Urgent",
    severityColor: "amber",
    commonRoot: "Internal expansion vessel membrane failure, leaking pressure relief valve (PRV), or hidden central heating pipe pinhole.",
    recommendedAction: "Engineer performs hydraulic pressure testing, inspects expansion vessel charge, and isolates the pressure drop source.",
    whatsappMessageTemplate: "URGENT: Boiler Pressure Dropped to 0 Bar (Low Pressure Fault).",
    diySafeTips: [
      "Locate the external filling loop beneath the boiler and check if the pressure gauge needle is below 1.0 bar.",
      "If you know how to safely top up the filling loop, increase pressure to 1.2–1.5 bar.",
      "If pressure drops back to 0 bar within hours, stop topping up and call us immediately to prevent boiler pump burnout."
    ]
  },
  {
    id: "frozen-condensate-pipe",
    title: "Frozen Condensate Pipe / Boiler Gurgling Noise",
    severity: "Emergency (Sub-zero weather)",
    severityColor: "orange",
    commonRoot: "External unlagged plastic waste pipe frozen during sub-zero freeze, causing internal safety siphon backup and shutoff.",
    recommendedAction: "Professional thawing, trace heating installation, pipe enlargement, or internal reroute to prevent recurring winter lockouts.",
    whatsappMessageTemplate: "URGENT: Frozen Condensate Pipe causing boiler gurgling / lockout in sub-zero freeze.",
    diySafeTips: [
      "Locate the white external plastic pipe leaving your boiler wall.",
      "Carefully pour warm (NEVER BOILING) water over the external pipe to thaw ice blockage.",
      "Reset boiler once thawed. If the issue recurs or pipe is inaccessible, dispatch our engineer for trace lagging."
    ]
  },
  {
    id: "radiator-burst-pipe-leak",
    title: "Active Radiator Valve Leak / Burst Central Heating Pipe",
    severity: "Critical SOS / Property Flood Risk",
    severityColor: "red",
    commonRoot: "Corroded thermostatic radiator valve (TRV) fracture, ruptured copper pipe under floorboards, or fitting blowout.",
    recommendedAction: "Immediate emergency arrival for wet system isolation, water containment, and high-integrity copper pipe splicing.",
    safetyWarning: "Turn off your main stopcock immediately if water is actively spraying or leaking into electrical fittings or ceilings.",
    whatsappMessageTemplate: "CRITICAL SOS: Active Radiator Valve Leak / Burst Central Heating Pipe - Water Flooding Risk.",
    diySafeTips: [
      "Isolate the radiator by turning the TRV and lockshield valves clockwise fully.",
      "Place towels and a catch bucket beneath the drip to protect your floorboards and plaster ceiling.",
      "If water continues pouring, turn off your property main water stopcock."
    ]
  },
  {
    id: "gas-smell-safety-shutoff",
    title: "Suspected Gas Smell / Gas Safety Isolation",
    severity: "Immediate Gas Safety Alert",
    severityColor: "red",
    commonRoot: "Gas meter regulator leak, unburnt fuel bypass, loose gas flex pipe, or cracked burner seal.",
    recommendedAction: "Immediate priority Gas Safe emergency engineer dispatched for flue gas analysis, electronic sniffing, and safe gas isolation.",
    safetyWarning: "GAS MAKE-SAFE ALERT: Do NOT operate light switches, do NOT strike matches or smoke, open all doors and windows, and turn off your gas meter control valve immediately.",
    whatsappMessageTemplate: "GAS SAFETY ALERT: Suspected Gas Smell at Property - Need Immediate Gas Safe Engineer Attendance.",
    diySafeTips: [
      "1. Extinguish all naked flames immediately.",
      "2. Open all doors and windows wide for cross-ventilation.",
      "3. Do NOT operate electrical switches, ring doorbells, or use sockets.",
      "4. Turn off the gas supply at the emergency control valve next to your gas meter.",
      "5. Step outside the property and call our emergency line or National Gas Emergency Service (0800 111 999)."
    ]
  }
];

export const CORE_SERVICES: ICoreService[] = [
  {
    id: "emergency-boiler-repair",
    title: "24/7 Emergency Boiler Repairs & Diagnostics",
    tagline: "Rapid Bolton Response • 30–45 Min ETA • OEM Parts Stocked",
    scope: "Fast on-site diagnosis for all major boiler brands (Worcester, Vaillant, Baxi, Ideal, Viessmann, Glow-worm) with vans fully stocked with OEM pumps, diverter valves, ignition sensors, fans, and PCBs.",
    keyPoints: [
      "Fixed £79 diagnostic fee — 100% credited to your repair if completed",
      "Vans carry high-failure genuine components for same-visit resolution",
      "Full digital Gas Safe report & safety certificate issued upon completion",
      "Available 24 hours a day, 365 days a year across all BL postcodes"
    ],
    icon: "Flame",
    pricingNote: "From £79 Fixed Diagnostic (Credited to repair)"
  },
  {
    id: "burst-pipe-plumbing",
    title: "Emergency Burst Pipe Repair & Central Heating Splicing",
    tagline: "Immediate Water Isolation • Acoustic Leak Detection • Floorboard Access",
    scope: "Immediate water isolation, copper compression/soldering repairs, push-fit repairs, and sub-floor central heating leak containment to protect your property from catastrophic water damage.",
    keyPoints: [
      "Urgent response for burst mains, fractured TRV radiator valves, and pinholes",
      "Advanced non-destructive leak tracing beneath laminate and carpet",
      "Complete system repressurisation and inhibitor dosing post-repair",
      "Temporary bypass fitting available to restore water to the rest of the home"
    ],
    icon: "Droplets",
    pricingNote: "Fixed Upfront Quotes • Zero Hidden Surcharges"
  },
  {
    id: "powerflushing-magnetic",
    title: "Central Heating Powerflushing & Magnetic Filters",
    tagline: "High-Flow MagnaCleanse Flush • Cures Cold Radiators & Noisy Boilers",
    scope: "High-flow chemical powerflushing and MagnaCleanse magnetic filtration to strip out stubborn black iron oxide magnetite sludge, eliminate cold radiator bottoms, and restore boiler efficiency.",
    keyPoints: [
      "Restores full heat output to lukewarm and sluggish radiators",
      "Reduces winter heating fuel bills by up to 15%–20%",
      "Protects new boiler heat exchangers from premature blockage",
      "Includes premium Adey / Sentinel magnetic filter supply & fit"
    ],
    icon: "RotateCw",
    pricingNote: "From £349 for Full System Flush + MagnaCleanse"
  },
  {
    id: "landlord-cp12-safety",
    title: "Landlord Gas Safety Certificates (CP12)",
    tagline: "Same-Day Landlord Inspection • Instant Digital Certificate Delivery",
    scope: "Comprehensive mandatory legal gas safety inspection of all gas boilers, fires, hobs, flues, and pipework with instant digital Gas Safe certificates delivered directly to landlords and letting agents.",
    keyPoints: [
      "Fast same-day and scheduled evening appointments for tenants",
      "Rigorous tightness testing and flue gas combustion analysis",
      "Direct invoicing and key collection from Bolton & GM estate agents",
      "Discounts available for multi-property landlord portfolios"
    ],
    icon: "ShieldCheck",
    pricingNote: "From £69 for Boiler + Gas Hob Inspection"
  }
];

export const BOILER_BRANDS: IBoilerBrand[] = [
  {
    name: "Worcester Bosch",
    logoText: "Worcester Bosch Group",
    badge: "Accredited Installer",
    commonFaults: [
      { code: "EA / 227", description: "Ignition lockout / Flame not detected (often frozen condensate or gas valve).", action: "Fast ignition electrode testing & condensate thawing." },
      { code: "A281 / E9", description: "Diverter valve sticking or primary heat exchanger over-temperature.", action: "OEM diverter motor replacement & thermal sensor recalibration." },
      { code: "2970", description: "System pressure below 0.6 bar safety threshold.", action: "Filling loop re-pressurisation & PRV hydraulic seal test." }
    ],
    notes: "Greenstar, CDi, Si, Junior, and Ri models fully supported with genuine Worcester Bosch OEM parts in stock."
  },
  {
    name: "Vaillant",
    logoText: "Vaillant ecoTEC",
    badge: "Advance Certified",
    commonFaults: [
      { code: "F.22 / F.24", description: "Dry fire / Low water pressure / Water deficiency safety lockout.", action: "Pressure top-up and expansion vessel membrane recharge." },
      { code: "F.75", description: "Water pressure sensor failed to detect pump pressure surge on startup.", action: "Replacement Vaillant high-precision pressure sensor & pump check." },
      { code: "F.28 / F.29", description: "Failed ignition / Gas supply interruption or flue obstruction.", action: "Gas valve calibration and spark generator renewal." }
    ],
    notes: "ecoTEC Plus, ecoTEC Pro, ecoFIT Pure, and Exclusive series serviced 24/7."
  },
  {
    name: "Ideal",
    logoText: "Ideal Logic / Vogue",
    badge: "Max Accredited",
    commonFaults: [
      { code: "F1 / Low Bar", description: "Loss of system water pressure below 0.5 bar.", action: "Filling loop activation and leak diagnosis." },
      { code: "L2 / F2", description: "Flame loss / Ignition lockout / Condensate trap full or frozen.", action: "Sump cleaning, condensate siphon unblocking, and spark inspection." },
      { code: "F3 / Fan Fault", description: "Boiler fan rotation speed out of PCB operating tolerance.", action: "OEM Ideal fan motor swap & wiring harness check." }
    ],
    notes: "Logic Max, Logic+, Vogue GEN2, and Independent Combi ranges covered."
  },
  {
    name: "Baxi",
    logoText: "Baxi Heating UK",
    badge: "Approved Specialist",
    commonFaults: [
      { code: "E119", description: "Low boiler water pressure switch open.", action: "Hydraulic recharge and pressure transducer testing." },
      { code: "E133 / E128", description: "Gas supply fault / Flame lost during active burner operation.", action: "Gas inlet pressure testing and spark electrode clean/replace." },
      { code: "E168", description: "PCB unexpected electrical error or low supply voltage.", action: "Main board diagnostic scan and power surge protection." }
    ],
    notes: "Baxi 600, Baxi 800, Platinum, Duo-tec, and Potterton Promax boilers."
  },
  {
    name: "Viessmann",
    logoText: "Viessmann Vitodens",
    badge: "Trained Partner",
    commonFaults: [
      { code: "F4 / EE", description: "Burner control unit lockout / No flame signal produced.", action: "Matrix burner inspection and ionisation electrode replacement." },
      { code: "F2", description: "Safety temperature limiter (STB) tripped due to low water circulation.", action: "Modulating pump check and air purge protocol." },
      { code: "F5", description: "Air pressure switch failed during flue extraction phase.", action: "Flue terminal check and differential pressure sensor swap." }
    ],
    notes: "Vitodens 050-W, 100-W, 200-W stainless steel Inox-Radial boiler specialists."
  },
  {
    name: "Glow-worm",
    logoText: "Glow-worm Boilers",
    badge: "Club Energy Member",
    commonFaults: [
      { code: "F9 / F22", description: "Water pressure fault or circulation switch failure.", action: "System recharge and sensor diagnostics." },
      { code: "F1", description: "Ignition failure / Gas inlet shutoff.", action: "Gas valve check and burner clean." },
      { code: "F3", description: "Fan motor or wiring communication fault.", action: "OEM fan replacement." }
    ],
    notes: "Betacom, Energy, Ultimate, and Compact Combi ranges fully serviced."
  }
];

export const SUBURB_COVERAGE: IAreaCoverage[] = [
  { town: "Bolton Central & Town Centre", postcode: "BL1, BL2", eta: "20–30 mins", activeStatus: "High Van Density", distanceKm: 1.5 },
  { town: "Horwich & Rivington", postcode: "BL6", eta: "25–35 mins", activeStatus: "Engineer On Standby", distanceKm: 8.2 },
  { town: "Westhoughton & Wingates", postcode: "BL5", eta: "25–35 mins", activeStatus: "High Van Density", distanceKm: 7.0 },
  { town: "Farnworth & Kearsley", postcode: "BL4", eta: "20–30 mins", activeStatus: "High Van Density", distanceKm: 5.4 },
  { town: "Bromley Cross & Egerton", postcode: "BL7", eta: "25–40 mins", activeStatus: "Engineer On Standby", distanceKm: 6.8 },
  { town: "Little Lever & Darcy Lever", postcode: "BL3", eta: "20–30 mins", activeStatus: "Fast Dispatch", distanceKm: 4.1 },
  { town: "Bury & Tottington", postcode: "BL8, BL9", eta: "30–45 mins", activeStatus: "High Van Density", distanceKm: 10.5 },
  { town: "Wigan & Standish", postcode: "WN1, WN2, WN6", eta: "35–45 mins", activeStatus: "Engineer On Standby", distanceKm: 15.2 },
  { town: "Radcliffe & Whitefield", postcode: "M26, M45", eta: "25–40 mins", activeStatus: "Fast Dispatch", distanceKm: 9.0 },
  { town: "Worsley & Walkden", postcode: "M28", eta: "30–45 mins", activeStatus: "Engineer On Standby", distanceKm: 11.2 }
];

export const PRICING_TIERS: IPricingTier[] = [
  {
    service: "Emergency Boiler Diagnostic & Fault Finding",
    cost: "£79",
    highlight: true,
    creditTerms: "100% of this £79 diagnostic fee is credited directly towards the cost of your repair if you proceed with our fix.",
    includes: [
      "Rapid on-site attendance (30–45 mins average)",
      "Full electronic combustion & flue gas analysis",
      "Electrical component & circuit board testing",
      "Hydraulic pressure, pump & diverter valve inspection",
      "Fixed written quote provided before any repair begins",
      "Zero hidden callout fees or weekend surcharges"
    ]
  },
  {
    service: "Minor Emergency Repairs (Pumps, Sensors, Valves)",
    cost: "From £120",
    creditTerms: "Includes £79 diagnostic credit applied. Genuine OEM replacement parts with 12-month manufacturer guarantee.",
    includes: [
      "Genuine manufacturer OEM replacement components",
      "Thermostatic radiator valves (TRVs) & lockshields",
      "Pressure relief valves (PRV) & auto air vents",
      "System repressurisation and inhibitor top-up",
      "12-Month parts & labour written guarantee"
    ]
  },
  {
    service: "Landlord Gas Safety Inspection (CP12)",
    cost: "£69",
    creditTerms: "Fixed price for up to 2 gas appliances (Boiler + Gas Hob). Same-day digital Gas Safe PDF certificate issued.",
    includes: [
      "Rigorous gas tightness test at meter",
      "Visual and operational check of all pipework & flues",
      "Combustion efficiency and CO / CO2 ratio analysis",
      "Safety device operation and burner pressure check",
      "Instant digital certificate emailed to landlord/agent",
      "Emergency make-safe advice if defects found"
    ]
  },
  {
    service: "MagnaCleanse Powerflush & Sludge Removal",
    cost: "From £349",
    creditTerms: "Comprehensive chemical deep-clean with magnetic filtration. Guaranteed to restore hot water flow to cold radiators.",
    includes: [
      "High-velocity MagnaCleanse dual magnetic flushing unit",
      "Sentinel / Fernox heavy-duty chemical sludge lifter",
      "Individual radiator isolation and reverse pulsing",
      "Full thermal imaging scan of all radiator panels",
      "Long-life corrosion inhibitor chemical dosing",
      "Adey / Sentinel magnetic filter supply and installation"
    ]
  }
];

export const VERIFIED_REVIEWS: IReview[] = [
  {
    id: "rev-1",
    author: "Dave Pennington",
    location: "Horwich, Bolton (BL6)",
    rating: 5,
    date: "3 days ago",
    boilerMake: "Worcester Bosch Greenstar 30i",
    issue: "EA Lockout during sub-zero freeze",
    comment: "Woke up on Sunday morning at -3°C with no heating and a toddler in the house. Called GasLegend after two other plumbers went to voicemail. Engineer Mark arrived in 35 minutes, found our condensate pipe frozen solid, thawed and rerouted it, and replaced an ignition probe. Had the radiators boiling hot within an hour. Outstanding local service!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Sarah Jenkinson",
    location: "Westhoughton, Bolton (BL5)",
    rating: 5,
    date: "1 week ago",
    boilerMake: "Vaillant ecoTEC Plus 832",
    issue: "F.75 Pressure Sensor Failure",
    comment: "Boiler kept cutting out with an F.75 fault every time the heating turned on. The GasLegend engineer had the exact OEM Vaillant pressure sensor and diverter seal in his van. The £79 diagnostic fee was deducted straight from the final invoice as promised. Clean, courteous, and strictly Gas Safe certified.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Tariq Mahmood",
    location: "Farnworth, Bolton (BL4)",
    rating: 5,
    date: "2 weeks ago",
    boilerMake: "Ideal Logic Combi C30",
    issue: "Active TRV Radiator Valve Burst Leak",
    comment: "Had an emergency water leak pouring through the living room ceiling from an upstairs radiator pipe. Sent a photo via their WhatsApp SOS button, and an engineer was on site in 28 minutes. He isolated the wet system, replaced the fractured copper union, and refilled the central heating inhibitor. Saved us thousands in potential water damage.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Claire & Paul Butterworth",
    location: "Bromley Cross, Bolton (BL7)",
    rating: 5,
    date: "3 weeks ago",
    boilerMake: "Baxi 800 Combi",
    issue: "Boiler Pressure Dropped to 0 Bar & E119 Error",
    comment: "Constant pressure loss over winter had us topping up the boiler every 4 hours. GasLegend pressure-tested the central heating loop, pinpointed a leaking expansion vessel Schrader valve, recharged the nitrogen chamber, and fixed it same day. Professional, prompt, and very transparent with prices.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Marcus Hargreaves (Property Portfolio Ltd)",
    location: "Bury & Bolton (BL9 / BL1)",
    rating: 5,
    date: "1 month ago",
    boilerMake: "Multiple Ideal & Baxi Boilers",
    issue: "Emergency CP12 Landlord Inspections & Radiator Flushes",
    comment: "We manage 32 rental properties across Bolton and Bury. GasLegend handles all our emergency breakdowns and annual CP12 Gas Safety Certificates. They collect keys directly from our lettings office, communicate courteously with tenants, and email digital Gas Safe certificates on the spot. Indispensable trade partners.",
    verified: true
  }
];

export const FAQS: IFaqItem[] = [
  {
    category: "Emergency",
    question: "How fast can an emergency gas engineer reach my Bolton property?",
    answer: "Our average emergency arrival time across Bolton (BL1–BL7), Horwich, Westhoughton, Farnworth, and surrounding areas is between 30 and 45 minutes. We operate multiple GPS-tracked mobile response vans equipped with diagnostic test kits and common OEM parts for instant dispatch."
  },
  {
    category: "Pricing",
    question: "How does your £79 diagnostic callout fee work?",
    answer: "Our £79 fixed diagnostic fee covers rapid on-site attendance, electronic combustion testing, and complete fault diagnosis by a licensed Gas Safe engineer. If you choose to proceed with the recommended repair, 100% of this £79 is credited towards your repair invoice, meaning you do not pay for diagnosis on top of the repair."
  },
  {
    category: "Gas Safe",
    question: "Are your heating engineers officially Gas Safe Registered?",
    answer: "Yes, 100%. All our engineers carry official Gas Safe Register ID cards (Registration #941824) and are legally certified to work on natural gas domestic boilers, gas pipework, flues, and combustion appliances. You can verify our registration number on the official Gas Safe Register website at any time."
  },
  {
    category: "Emergency",
    question: "What should I do right now if I smell gas in my home?",
    answer: "If you suspect a gas leak: 1) Extinguish all open flames immediately. 2) Open all windows and doors for ventilation. 3) Do NOT switch electrical lights or appliances on/off. 4) Turn off the emergency control valve next to your gas meter. 5) Step outside into fresh air and call our emergency line on 07943 123456 or the National Gas Emergency helpline on 0800 111 999."
  },
  {
    category: "Pricing",
    question: "Do you charge extra for late-night, weekend, or bank holiday callouts?",
    answer: "We maintain clear, transparent pricing with no extortionate surge rates. Our emergency dispatch rate is communicated upfront before our engineer departs, and we provide a fixed written quote before any physical repair or parts replacement begins."
  },
  {
    category: "Coverage",
    question: "Which areas in Greater Manchester and Lancashire do you cover?",
    answer: "We provide comprehensive 24/7 coverage throughout Bolton (BL1, BL2, BL3, BL4, BL5, BL6, BL7), Horwich, Westhoughton, Blackrod, Farnworth, Kearsley, Little Lever, Bury (BL8, BL9), Wigan (WN1, WN2, WN6), Radcliffe (M26), and Worsley (M28)."
  }
];

export function buildWhatsAppEmergencyUrl(options: {
  issueTitle?: string;
  boilerBrand?: string;
  postcode?: string;
  propertyType?: string;
}): string {
  const phone = CONTRACTOR_DATA.whatsappNumber;
  const issue = options.issueTitle || "Boiler Breakdown / Emergency Heating Outage";
  const brand = options.boilerBrand ? `\n• Boiler Brand: ${options.boilerBrand}` : "";
  const location = options.postcode ? `\n• Postcode / Area: ${options.postcode}` : "\n• Area: Bolton / Greater Manchester";
  const prop = options.propertyType ? `\n• Property: ${options.propertyType}` : "";

  const message = `🚨 EMERGENCY GAS & HEATING DISPATCH REQUEST 🚨
• Issue: ${issue}${brand}${location}${prop}
• Urgency: Immediate Attendance Required
Please confirm nearest available Gas Safe engineer ETA and dispatch to my location.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
