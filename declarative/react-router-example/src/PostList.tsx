import { BlogPosts } from "./data/posts";
import { Link } from "react-router";
const PostList = () => {
    return (
        <ul>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/posts/${slug}`}>
                        <h3>{title}</h3>
                    </Link>

                </li>
            ))}
        </ul>
    );
};

export default PostList;
