import { Link, useLoaderData } from "react-router";
const PostList = () => {
    const { records } = useLoaderData();
    return (
        <ul>
            {Object.entries(records).map(([slug, { title }]) => (
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
