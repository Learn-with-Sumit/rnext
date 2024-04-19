import { EventButton } from "./components/Button";

export default async function Home() {
    return (
        <div className="p-8">
            <h1 className="text-gray-800">Metadata</h1>
            <div className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                amet consequatur odio, obcaecati laudantium possimus dolorem
                deserunt, molestiae quae voluptatem officia. Sit similique
                sapiente sunt beatae modi perferendis vero nam.
            </div>

            <div className="mt-6">
                <EventButton />
            </div>
        </div>
    );
}
