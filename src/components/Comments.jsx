import { useEffect, useState } from "react";

export default function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [isCommentsLoading, setIsCommentsLoading] = useState(false);
    const [commentsError, setCommentsError] = useState(null);

    useEffect(() => {
        setIsCommentsLoading(true);
        setCommentsError(null);

        const fetchComments = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
                );
                const data = await response.json();

                if (response.ok) {
                    setIsCommentsLoading(false);
                    setComments(data);
                } else {
                    setIsCommentsLoading(false);
                    setCommentsError("There was an error occured");
                }
            } catch (err) {
                setIsCommentsLoading(false);
                setCommentsError(err.message);
            }
        };

        fetchComments();
    }, [postId]);

    // choose what to render for comments
    let commentsContent;

    if (isCommentsLoading) {
        commentsContent = <div>Loading comments...</div>;
    } else if (!isCommentsLoading && commentsError) {
        commentsContent = <div className="error">{commentsError}</div>;
    } else {
        commentsContent = (
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <h2>Comments</h2>

            <div>{commentsContent}</div>
        </div>
    );
}
