import type { Metadata } from "next";
import { ClerkProvider, SignedOut, SignedIn, SignIn } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/navbar";
import { ThemeProvider } from "@/components/component/theme-provider";
import { jacques_francois } from "./fonts";
import { Footer } from "@/components/component/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Better Siswa",
  description: "Developed by Asjad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={inter.className}>
        <body className="app-bg bg-slate-100 dark:bg-gray-900">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
