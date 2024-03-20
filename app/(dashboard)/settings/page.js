import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";
import { Suspense } from "react";

export default function Settings() {
    return (
        <div className="p-4">
            <h1 className="text-2xl">Settings page</h1>

            <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam accusantium dolor at veniam doloribus, delectus
                repellendus iste. Quis explicabo voluptatem in ea nisi! Pariatur
                molestiae tenetur reiciendis, atque tempore quis!
            </p>

            <Button>Go to Analytics Page</Button>

            <br />
            <br />
            <Suspense>
                <SortProducts />
            </Suspense>
        </div>
    );
}
