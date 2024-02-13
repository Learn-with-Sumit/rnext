import { useEffect, useState } from "react";

export default function PostSelector({ onSelectPost }) {
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [postsError, setPostsError] = useState(null);

    useEffect(() => {
        setIsPostsLoading(true);
        setPostsError(null);

        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=5"
                );
                const data = await response.json();

                if (response.ok) {
                    setIsPostsLoading(false);
                    setPosts(data);
                } else {
                    setIsPostsLoading(false);
                    setPostsError("There was an error");
                }
            } catch (err) {
                setIsPostsLoading(false);
                setPostsError(err.message);
            }
        };

        fetchPosts();
    }, []);

    // choose what to render for postsSelector
    let postsContent;

    if (isPostsLoading) {
        postsContent = <div>Posts loading...</div>;
    } else if (!isPostsLoading && postsError) {
        postsContent = <div className="error">{postsError}</div>;
    } else {
        postsContent = (
            <select onChange={onSelectPost}>
                <option value="">Select Post</option>
                {posts.map((post) => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
        );
    }

    return <div>{postsContent}</div>;
}
