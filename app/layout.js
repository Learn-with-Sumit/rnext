import "./globals.css";

export const metadata = {
    title: "My website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    openGraph: {
        images: [
            {
                url: "http://localhost:3000/api/og",
                width: 1200,
                height: 600,
            },
        ],
    },
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
