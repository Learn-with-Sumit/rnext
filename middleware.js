import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request, event) {
    event.waitUntil(
        setTimeout(() => {
            console.log("Done!");
        }, 3000)
    );

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/"],
};
