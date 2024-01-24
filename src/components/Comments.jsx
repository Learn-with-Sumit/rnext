import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function Comments({ postId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            const json = await fetchComments(postId);

            if (!ignore) {
                setComments(json);
            }
        }

        startFetching();

        return () => {
            ignore = true;
        };
    }, [postId]);

    return (
        <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>
        </div>
    );
}
