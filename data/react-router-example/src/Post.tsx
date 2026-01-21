import { useParams, useLoaderData } from "react-router";


const Post = () => {
    const { records } = useLoaderData();
    const { slug } = useParams();
    const post = slug ? records[slug] : null;

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
