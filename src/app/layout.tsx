import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import NavBar from "./components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Valo Made EZ",
  description: "Valorant information made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-white text-black">
            <NavBar />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
