import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "StaySwift",
    description: "One Place Stop for Hospitability",
};

export default async function RootLayout({ children }) {
    await dbConnect();
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar sideMenu={false} />
                <main>{children}</main>
            </body>
        </html>
    );
}
