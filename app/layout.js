import "./globals.css";
import { siteConfig } from "@/site.config";
import { Providers } from "./providers";

// Use FR meta for SSR/SEO (canonical default)
const meta = siteConfig.fr.meta;
const design = siteConfig.fr.design;

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.ogTitle || meta.title,
    description: meta.ogDescription || meta.description,
    images: meta.ogImage ? [meta.ogImage] : [],
    locale: "fr",
    type: "website",
  },
  icons: {
    icon: meta.favicon?.startsWith("/")
      ? meta.favicon
      : `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${encodeURIComponent(meta.favicon || "⚡")}</text></svg>`,
  },
};

const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(design.fontHeading)}:wght@${design.fontWeights}&display=swap${design.fontBody !== design.fontHeading
    ? `&family=${encodeURIComponent(design.fontBody)}:wght@${design.fontWeights}&display=swap`
    : ""
  }`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-palette={design.palette}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontUrl} rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: `'${design.fontBody}', sans-serif` }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
