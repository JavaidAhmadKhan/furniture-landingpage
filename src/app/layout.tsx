import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

const rubik = localFont({
  src: "./fonts/Rubik-Regular.ttf",
  variable: "--font-robik-regular",
  display: "swap",
});
const rubikMedium = localFont({
  src: "./fonts/Rubik-Medium.ttf",
  variable: "--font-robik-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furnique",
  description: "We desgin best furnished to the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${rubik.variable} ${rubikMedium.variable}`}
    >
      <body className="bg-[#f4eee5] dark:bg-blackText">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <ScrollButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
