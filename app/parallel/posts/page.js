import getPosts from "@/api/getPosts";
import Link from "next/link";

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <div className="p-6">
            <h2 className="text-slate-800">All posts</h2>

            <div className="mt-6">
                <ul className="text-slate-800">
                    {posts?.length > 0 ? (
                        posts.map((post) => (
                            <li className="mb-5" key={post.id}>
                                <Link href={`/parallel/posts/${post.id}`}>
                                    {post.id}. {post.title}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No posts found!</li>
                    )}
                </ul>
            </div>
        </div>
    );
}
