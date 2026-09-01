import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { EmergencyTopBanner } from "@/components/EmergencyTopBanner";
import { Navbar } from "@/components/Navbar";
import { StickyMobileDispatchDock } from "@/components/StickyMobileDispatchDock";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "GasLegend | 24/7 Gas Safe Heating & Emergency Plumber Bolton",
  description: "24/7 Gas Safe emergency boiler repairs, burst pipes, and heating breakdown engineer across Bolton (BL1–BL7) & Greater Manchester. 30–45 min average arrival. Fixed £79 diagnostic credited to repair. Call 07943 123456.",
  keywords: [
    "Emergency plumber Bolton",
    "Gas Safe engineer Bolton",
    "24/7 boiler repair Bolton",
    "Boiler breakdown Horwich",
    "Emergency heating engineer Westhoughton",
    "Burst pipe repair Farnworth",
    "CP12 landlord certificate Bolton",
    "Worcester Bosch repair Bolton",
    "Vaillant boiler specialist Greater Manchester"
  ],
  authors: [{ name: CONTRACTOR_DATA.businessName }],
  creator: CONTRACTOR_DATA.businessName,
  publisher: CONTRACTOR_DATA.businessName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://gaslegend-bolton.co.uk",
    title: "GasLegend | 24/7 Gas Safe Heating & Emergency Plumber Bolton",
    description: "24/7 Emergency boiler breakdowns, burst pipes, and gas safety across Bolton & Greater Manchester. 30–45m response time. Gas Safe #941824.",
    siteName: CONTRACTOR_DATA.businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: "GasLegend | 24/7 Gas Safe Heating & Emergency Plumber Bolton",
    description: "Rapid 30–45 min emergency boiler repair & plumbing across Bolton and Greater Manchester. Gas Safe Registered #941824.",
  },
  alternates: {
    canonical: "https://gaslegend-bolton.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning className="dark">
      <head>
        <JsonLdSchema />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-200 selection:bg-amber-500 selection:text-slate-950">
        <ThemeProvider>
          {/* Accessible Skip to Content Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-lg shadow-xl focus:outline-none"
          >
            Skip to main content
          </a>

          <EmergencyTopBanner />
          <Navbar />
          
          <div className="flex-1 flex flex-col">
            {children}
          </div>

          <StickyMobileDispatchDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
