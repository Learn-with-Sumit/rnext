import "./globals.css";

export const metadata = {
    title: "Server Actions",
    description: "Next.js Server Action Example",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-200 px-5">
                <main className="mx-auto rounded bg-white max-w-5xl px-5 min-h-[100dvh]">
                    {children}
                </main>
            </body>
        </html>
    );
}
