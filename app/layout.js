import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "Splitre",
  description: "Splitting expenses amopng friends made easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo1.jpg" sizes="any" />
      </head>
      <body
        className={`${inter.className}`}>
        <ClerkProvider>
        <ConvexClientProvider>
            
        <Header />

        <main className="min-h-screen">
        {children}
         <Toaster richColors />
        </main>
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
