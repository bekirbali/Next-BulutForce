import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "BulutForce - Geleceğin Teknoloji Vizyonu",
  description: "Bulut Force",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <div className="pt-[95px] sm:pt-[105px] min-[808px]:pt-[137px] lg:pt-[162px] xl:pt-[180px] bg-[url('/bfbgnew.jpg')] bg-cover bg-center bg-fixed min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
