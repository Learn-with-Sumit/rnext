import { getCatFacts } from "@/apis/apis";
import Button from "../components/Button";

export default async function StaticPage() {
    const catFacts = await getCatFacts();

    return (
        <div>
            <h1>Static - Prerendered as Static Content</h1>
            <div className="mt-4">{catFacts.fact}</div>

            <div className="mt-8">
                <Button>Click here</Button>
            </div>
        </div>
    );
}
