import { getCatFacts } from "@/apis/apis";
import { Suspense } from "react";
import CatFacts from "../components/catFacts";

export default async function HybridPage() {
    const catFacts = await getCatFacts();

    return (
        <div>
            <h1>Hybrid - Dynaimc as part of page is dynamic</h1>
            <div className="mt-4">{catFacts.fact}</div>

            <div className="mt-10">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <CatFacts />
                </Suspense>
            </div>
        </div>
    );
}
