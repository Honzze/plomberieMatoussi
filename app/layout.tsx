import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/landing/navbar";
import { ThemeProvider } from "@/src/components/theme-provider";
import React from "react";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from "@/src/components/landing/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plomberie & Multi-services à Nantes | Dépannage 24h/7j",
  description: "Technicien plombier et multi-services qualifié depuis 21 ans à Nantes. Intervention rapide pour fuites et rénovations. Contactez-nous au 0612345678 pour une intervention efficace et professionnelle.",
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  "name": "Matoussi Plomberie & Multi-services",
  "description": "Technicien plombier et multi-services qualifié depuis 21 ans à Nantes. Intervention rapide pour fuites et rénovations.",
  "url": "https://matoussiplomberiemultiservices.fr",
  "telephone": "+33612345678", // Mets ton vrai numéro ici
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nantes",
    "addressRegion": "Loire-Atlantique",
    "postalCode": "44000",
    "addressCountry": "FR"
  },
  "areaServed": ["Nantes", "Bouguenais", "Rezé", "Carquefou", "saint-sébastien-sur-loire", "Orvault", "Saint-Herblain", "Vertou", "Sautron", "Indre", "Saint-Jean-de-Boiseau", "Le Pellerin", "La Chapelle-sur-Erdre", "Saint-Léger-les-Vignes", "Mauves-sur-Loire", "Basse-Goulaine", "Haute-Goulaine", "Saint-Fiacre-sur-Maine", "Le Loroux-Bottereau", "Vallet", "Gorges", "Clisson", "Aigrefeuille-sur-Maine", "divaion", "Saint-Étienne-de-Montluc", "Port-Saint-Père", "Frossay", "Saint-Viaud", "Corsept", "Paimbœuf", "Montoir-de-Bretagne", "Saint-Brevin-les-Pins", "Saint-Nazaire"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Script SEO inséré proprement ici */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <Analytics/>
      <SpeedInsights/>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </body>
      </html>
  );
}
