import type { Metadata } from "next";
import "@fontsource/bricolage-grotesque/latin-700.css";
import "@fontsource/bricolage-grotesque/latin-800.css";
import "@fontsource/figtree/latin-400.css";
import "@fontsource/figtree/latin-500.css";
import "@fontsource/figtree/latin-700.css";
import "@fontsource/caveat/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raj G | Apps people actually use",
  description: "Second-year AI and Data Science student in Chennai. I build full-stack apps for my college, for businesses and free learning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full font-figtree antialiased">
        {children}
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: ".slap,.note-in{animation-play-state:running!important}.timeline-line{transform:scaleX(1)!important}" }} />
        </noscript>
      </body>
    </html>
  );
}
