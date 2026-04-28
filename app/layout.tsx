import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";
import { Providers } from "@/components/providers/theme-provider";
import { NProgressBar } from "@/components/ui/nprogress-bar";
import { BackToTop } from "@/components/ui/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Andigi - Digital Agency",
    template: "%s | Andigi",
  },
  description: "We craft digital experiences that drive results. Web Design, Branding, Digital Marketing & Ecommerce solutions.",
  keywords: ["digital agency", "web design", "branding", "digital marketing", "ecommerce", "Vietnam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <ToastProvider>
            <NProgressBar />
            <BackToTop />
            <a
              href="#main-content"
              className="skip-to-content"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
