import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "./components/navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dunder Mifflin Paper Company",
  description: "Dunder Mifflin Paper Company, Inc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
