import Header from "./components/Header";
import "./globals.css";

export const metadata = {
    title: "Data Fecthing",
    description: "Patterns and Best Practices",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-200 px-5">
                <main className="mx-auto rounded bg-white max-w-5xl px-5 min-h-[100dvh]">
                    <div className="p-8">
                        <h1 className="text-gray-800">
                            Patterns and Best Practices
                        </h1>

                        <Header />
                    </div>
                    <div className="px-8">{children}</div>
                </main>
            </body>
        </html>
    );
}
