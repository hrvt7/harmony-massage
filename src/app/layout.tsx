import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const heading = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harmonymassage.hu"),
  title: {
    default: "Harmony Masszázs Stúdió — Masszázs | Budapest",
    template: "%s | Harmony Masszázs Stúdió",
  },
  description:
    "Professzionális masszázs stúdió Budapest belvárosában. Svéd masszázs, aromaterápiás masszázs, mélyizom masszázs, forró köves masszázs, sportmasszázs, thai masszázs. Személyre szabott kezelések, szakértő kezekben.",
  keywords:
    "masszázs budapest, masszőr budapest, svéd masszázs, aromaterápiás masszázs, mélyizom masszázs, forró köves masszázs, sportmasszázs, thai masszázs, relaxációs masszázs, masszázs stúdió",
  openGraph: {
    title: "Harmony Masszázs Stúdió — Masszázs | Budapest",
    description:
      "Professzionális masszázs stúdió Budapest belvárosában. Személyre szabott kezelések, szakértő kezekben.",
    url: "https://harmonymassage.hu",
    siteName: "Harmony Masszázs Stúdió",
    locale: "hu_HU",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://harmonymassage.hu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${heading.variable} ${body.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname);window.scrollTo(0,0)` }} />
        {/* HealthAndBeautyBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "@id": "https://harmonymassage.hu/#business",
              name: "Harmony Masszázs Stúdió",
              description:
                "Professzionális masszázs stúdió Budapest belvárosában. Svéd masszázs, aromaterápiás masszázs, mélyizom masszázs, forró köves masszázs, sportmasszázs, thai masszázs.",
              url: "https://harmonymassage.hu",
              telephone: "+36301234567",
              email: "info@harmonymassage.hu",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nagymező utca 42.",
                addressLocality: "Budapest",
                postalCode: "1065",
                addressCountry: "HU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.5048,
                longitude: 19.06,
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
              ],
              availableService: [
                { "@type": "Service", name: "Svéd masszázs" },
                { "@type": "Service", name: "Aromaterápiás masszázs" },
                { "@type": "Service", name: "Mélyizom masszázs" },
                { "@type": "Service", name: "Forró köves masszázs" },
                { "@type": "Service", name: "Sportmasszázs" },
                { "@type": "Service", name: "Thai masszázs" },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-foreground">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
