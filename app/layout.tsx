import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "UrbanX",
  description: "UrbanX umbrella company website",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="min-h-screen bg-white">
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              <Navbar />
              <main className="border border-gray-200 rounded-md bg-white">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
