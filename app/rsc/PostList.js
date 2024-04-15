import { getPosts } from "@/apis/apis";
import { Suspense } from "react";
import PostCard from "./PostCard";
import PostUser from "./PostUser";
import PostWithMarkdown from "./PostWithMarkdown";

export default async function PostList() {
    const posts = await getPosts("dynamic", true);

    return (
        <div className="flex flex-col gap-10">
            {posts.map((post) => (
                <PostCard key={post.id} postId={post.id}>
                    <Suspense
                        fallback={
                            <div className="loading">Loading user...</div>
                        }
                    >
                        <PostUser userId={post.userId} />
                    </Suspense>

                    <PostWithMarkdown text={post.body} />
                </PostCard>
            ))}
        </div>
    );
}
