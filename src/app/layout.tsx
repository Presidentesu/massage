import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Hot Massage | Nuru massage",
  description:
    "Discover professional massage therapists for massage therapy. Restore your body & mind today.",
  keywords: [
    "Extra massage",
    "massage in addis ababa",
    "massage in ethiopia",
    "Nuru massage",
    "massage for adults",
    "Swedish Massage",
    "Deep Tissue Massage",
    "Hot Stone Massage",
    "Aromatherapy Massage",
    "Couples Massage",
    "Sports Massage",
    "Thai Massage",
    "Balinese Massage",
    "Lomi Lomi Massage",
    "Shiatsu Massage",
    "Hot Massage",
    "Nuru Massage Addis Ababa",
    "Full Body Massage",
    "Professional Massage",
    "Massage for Men",
    "Massage for Women",
    "Hot Oil Massage",
    "Lingam Massage",
    "Tantric Massage",
    "Happy ending Massage"
  ],
  authors: [{ name: "Esayas 0938791017" }],
  openGraph: {
    title: "Hot Massage | Nuru massage",
    description:
      "Experience professional massage therapy designed for deep relaxation, pain relief, and holistic wellness.",
    url: "https://hotmassage.com",
    siteName: "Hot Massage",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hot Massage Extra Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Massage | Nuru massage in Addis Ababa",
    description:
      "Experience professional massage therapy in Addis Ababa for adults designed for deep relaxation, pain relief, and holistic wellness.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <AuthProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
