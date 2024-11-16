import type { Metadata } from "next";
import localFont from "next/font/local";
import { Great_Vibes, Forum } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-forum",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Convite Juju",
  description: "Convite Juju",
  icons: {
    icon: "/Anive/lacoCereja.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${forum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
