import { getCatFacts } from "@/apis/apis";

export default async function StaticPage() {
    const catFacts = await getCatFacts("dynamic");

    return (
        <div>
            <h1>Dynamic - Server-rendered on demand</h1>
            <div className="mt-4">{catFacts.fact}</div>
        </div>
    );
}
