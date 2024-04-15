import { getPosts } from "@/apis/apis";
import Link from "next/link";

export default async function Posts() {
    const posts = await getPosts();

    return (
        <div>
            <h1>All posts</h1>
            <div className="mt-4">
                <ul>
                    {posts.map((post) => (
                        <Link
                            prefetch={false}
                            className="block hover:border-0"
                            href={`/isr/posts/${post.id}`}
                            key={post.id}
                        >
                            {post.id}. {post.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
