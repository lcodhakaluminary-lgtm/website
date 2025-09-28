import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProBackground from "../components/ProBackground";

export const metadata = {
  title: "Leo Club of Dhaka Luminary",
  description: "Living the Luminary Spirit — District 315 B1, Dhaka, Bangladesh.",
  metadataBase: new URL("https://your-vercel-domain.vercel.app"),
  openGraph: {
    title: "Leo Club of Dhaka Luminary",
    description: "Living the Luminary Spirit — District 315 B1",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Leo Club of Dhaka Luminary",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Club of Dhaka Luminary",
    description: "Living the Luminary Spirit — District 315 B1",
    images: ["/logo.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Subtle, professional background */}
        <ProBackground />

        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-3 py-1 rounded">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
