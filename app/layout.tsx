import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "./components/cookie-consent";
import { EnrollModal } from "./components/enroll-modal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Serif used for the "N&D" part of the brand wordmark.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ND Education — Neo-Gen High Tech",
  description: "A premium learning command center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${montserrat.variable} ${jetbrainsMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          // Apply the saved/system theme before paint to avoid a flash.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':!window.matchMedia('(prefers-color-scheme: light)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-on-surface">
        {children}
        <EnrollModal />
        <CookieConsent />
      </body>
    </html>
  );
}
