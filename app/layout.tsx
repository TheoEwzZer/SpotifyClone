import { Figtree } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";

import "./globals.css";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { NextFont } from "next/dist/compiled/@next/font";

const font: NextFont = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
