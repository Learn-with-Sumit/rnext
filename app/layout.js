import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-XYZ" />
            <body className="bg-gray-200 px-5">
                <main className="mx-auto rounded bg-white max-w-5xl px-5 min-h-[100dvh]">
                    {children}
                </main>
            </body>
            <GoogleAnalytics gaId="G-XYZ" />
        </html>
    );
}
