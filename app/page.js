export const metadata = {
    title: "Home Page",
    description: "This is our home page",
};

export default function Home() {
    return (
        <div className="home">
            <h1 className="text-2xl">Home Page</h1>
            <div className="mt-10">This is the home page content</div>
        </div>
    );
}
