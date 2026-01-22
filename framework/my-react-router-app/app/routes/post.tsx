import { getPostById } from "~/data/posts";
import type { Route } from "./+types/post";

const post = ({ params }: Route.ComponentProps) => {
    const post = getPostById(Number(params.postId));
    if (!post) {
        return <div>Post not found!</div>;
    }

    const { title, description } = post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default post;
