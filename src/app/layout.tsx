import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export const viewport: Viewport = {
  themeColor: "#070D10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abraham Arts Studio | 3D Artist, Modelling & Animation",
  description:
    "Portfolio of Olorunleke Abraham, a 3D artist and animator creating 3D models, animation and AI-assisted visual experiences.",
  keywords: [
    "3D Artist",
    "3D Modelling",
    "3D Animation",
    "AI Animation",
    "Google Veo",
    "Blender Artist",
    "ZBrush Sculpting",
    "Maya Animator",
    "Olorunleke Abraham",
    "Abraham Arts Studio",
    "CGI Portfolio",
  ],
  authors: [{ name: "Olorunleke Abraham" }],
  creator: "Olorunleke Abraham",
  metadataBase: new URL("https://abrahamartsstudio.com"),
  openGraph: {
    title: "Abraham Arts Studio | 3D Artist, Modelling & Animation",
    description:
      "High-end 3D modelling, character sculpting, cinematic animation and AI-assisted visual experiences by Olorunleke Abraham.",
    url: "https://abrahamartsstudio.com",
    siteName: "Abraham Arts Studio",
    images: [
      {
        url: "/assets/brand/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Abraham Arts Studio Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham Arts Studio | 3D Artist & Animator",
    description:
      "Crafting characters, worlds and motion through 3D by Olorunleke Abraham.",
    images: ["/assets/brand/logo/logo.svg"],
  },
  icons: {
    icon: "/assets/brand/logo/logo.svg",
    shortcut: "/assets/brand/logo/logo.svg",
    apple: "/assets/brand/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070D10] text-[#F1F5F9] antialiased selection:bg-[#74E023] selection:text-[#070D10] min-h-screen flex flex-col">
        {/* Initial Cinematic Preloader */}
        <Preloader />

        {/* Custom Desktop Magnetic Cursor */}
        <CustomCursor />

        {/* Floating Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 w-full">{children}</main>

        {/* Oversized Studio Footer */}
        <Footer />
      </body>
    </html>
  );
}
