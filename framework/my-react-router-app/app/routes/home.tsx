import { Link } from "react-router";
import { fetchPosts } from "~/lib/data";
import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader() {
    const posts = await fetchPosts();
    return posts;
}

export default function Home({loaderData}: Route.ComponentProps) {

    const posts = loaderData;
    return (
        <>
            <Navbar />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
