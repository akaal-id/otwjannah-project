import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import '../app/globals.css';
import FacebookPixel from "../components/FacebookPixel";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "On The Way to Jannah",
  description: "Yuk Barengan Jadi Muda Berkah Ending Indah",
  icons: {
    icon: [
      {
        url: "/images/main-rismada.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/main-rismada.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <head>
        <script src="/navbar-effect.js" defer></script>
      </head>
      <body className={`${plusJakartaSans.variable} bg-[#0a0a0a] text-[#C3BEA1] font-sans min-h-screen antialiased`}>
        {/* Facebook Pixel is a client component and must be rendered inside the body */}
        <FacebookPixel pixelId="1207562621178209" />
        {children}
      </body>
    </html>
  );
}