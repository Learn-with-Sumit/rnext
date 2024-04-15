import { Suspense } from "react";
import PostList from "./PostList";

export default function PostsPage() {
    return (
        <div>
            <h1>Vanilla RSC</h1>
            <Suspense
                fallback={<div className="loading">Loading posts...</div>}
            >
                <PostList />
            </Suspense>
        </div>
    );
}
