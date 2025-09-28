import "./globals.css";

export const metadata = {
  title: "Leo Club of Dhaka Luminary",
  description: "Living the Luminary Spirit — District 315 B1, Dhaka, Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
