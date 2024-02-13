import { useEffect, useState } from "react";
import "./App.css";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

export default function App() {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [postsError, setPostsError] = useState(null);

    const handleSelectPost = (e) => {
        setSelectedPostId(e.target.value);
    };

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
            <PostSelector posts={posts} onSelectPost={handleSelectPost} />
        );
    }

    return (
        <div>
            <h1>React Suspense and Error Boundaries</h1>

            <div>
                {postsContent}

                {selectedPostId && <Comments postId={selectedPostId} />}
            </div>
        </div>
    );
}
