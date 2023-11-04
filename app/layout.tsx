import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Figtree } from "next/font/google";
import "./globals.css";

const font: NextFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
