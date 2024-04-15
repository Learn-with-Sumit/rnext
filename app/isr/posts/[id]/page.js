import { getPost, getPosts } from "@/apis/apis";

export default async function Post({ params: { id } }) {
    const post = await getPost(id);

    return (
        <div>
            <h1>{post.title}</h1>

            <div className="mt-4">{post.body}</div>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}
