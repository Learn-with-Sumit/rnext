import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav className="p-4 border-b border-gray-400">
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}
