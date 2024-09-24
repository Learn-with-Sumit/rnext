import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BlogCast",
  description: "Read the latest of tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          <main>
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
