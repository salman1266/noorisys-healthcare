import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundParticlesWrapper } from "@/components/3d/BackgroundParticlesWrapper";

export const metadata: Metadata = {
  title: "Noorisys Healthcare | The Future of Healthcare Is Connected",
  description:
    "Explore a portfolio of 15 specialized healthcare products designed to advance digital healthcare experiences, empower healthcare professionals, and simplify healthcare operations. A portfolio by Noorisys Technologies.",
  keywords: [
    "Noorisys Healthcare",
    "Noorisys Technologies",
    "Healthcare Technology Portfolio",
    "Electronic Medical Records",
    "EMR",
    "Telemedicine",
    "Primary Care Workforce",
    "Ambulance Dispatch",
    "Digital Pharmacy",
    "Aeromedical Consulting",
    "Health Marketplace",
  ],
  authors: [{ name: "Noorisys Technologies Pvt. Ltd.", url: "https://noorisys.com" }],
  creator: "Noorisys Technologies",
  publisher: "Noorisys Technologies",
  metadataBase: new URL("https://healthcare.noorisys.com"),
  icons: {
    icon: "/logos/noorisys-logo.png",
    apple: "/logos/noorisys-logo.png",
  },
  openGraph: {
    title: "Noorisys Healthcare | The Future of Healthcare Is Connected",
    description:
      "Explore 15 specialized healthcare products engineered to advance clinical workflows, patient access, and emergency healthcare operations.",
    url: "https://healthcare.noorisys.com",
    siteName: "Noorisys Healthcare",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noorisys Healthcare | The Future of Healthcare Is Connected",
    description:
      "A dedicated healthcare technology portfolio under parent company Noorisys Technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#040810] text-[#F5F8FC] antialiased selection:bg-[#12CDB5] selection:text-[#07111F] font-sans relative">
        {/* 3D Global Page Background Particles */}
        <BackgroundParticlesWrapper />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
