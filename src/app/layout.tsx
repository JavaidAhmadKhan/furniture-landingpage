import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/theme-provider";
// import Footer from "./components/Footer";

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
  title: "Furniture",
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
