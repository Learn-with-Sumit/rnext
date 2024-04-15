import { getCatFacts } from "@/apis/apis";

export default async function CatFacts() {
    const catFacts = await getCatFacts("dynamic", true);

    return (
        <div>
            <div className="mt-4">{catFacts.fact}</div>
        </div>
    );
}
