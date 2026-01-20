import { useParams } from "react-router";
import { BlogPosts } from "./data/posts";

const Post = () => {
    const { slug } = useParams();
    const post = slug ? BlogPosts[slug] : null;

    if (!post) {
        return <p>The Post not found!</p>
    }

    const {title, description} = post;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
};

export default Post;
