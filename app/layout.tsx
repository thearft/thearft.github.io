import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { RevealManager } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Arafat Hossain",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "thearft",
    type: "website",
    locale: "en",
    // TODO(Arafat): on-brand OG image pending design + approval (CLAUDE.md §9)
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C1013",
  colorScheme: "dark",
};

/* No-flash bootstrap: mark JS present before first paint (reveal styles apply
   only under html.js), and reveal everything after 1.8s if hydration never
   arrives, so content can never stay hidden. */
const bootstrap =
  "document.documentElement.classList.add('js');" +
  "setTimeout(function(){var d=document.documentElement;" +
  "if(!d.classList.contains('io-live'))d.classList.add('reveal-all');},1800);";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-ink font-sans text-cream antialiased">
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-ice focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:tracking-[0.12em] focus:text-night"
        >
          SKIP TO CONTENT
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealManager />
      </body>
    </html>
  );
}
