import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { profile, siteUrl } from "../lib/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfolio of Shimul Mahmud — full-stack developer (React, Next.js, Node, TypeScript) with hands-on IT, DevOps and self-hosted CI/CD experience. Based in Dhaka, Bangladesh.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.fullName, url: "https://github.com/shimul705" }],
  keywords: [
    "Shimul Mahmud",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "frontend developer Bangladesh",
    "DevOps",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only z-[60] rounded-md bg-accent px-4 py-2 text-accent-fg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
