import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/navbar";
import { ThemeProvider } from "@/components/component/theme-provider";
import { jacques_francois } from "./fonts";
import { Footer } from "@/components/component/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Better Muslim",
  description: "Developed by Asjad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
