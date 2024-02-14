import use from "../hooks/use";
import { fetchData } from "../utils/data";

export default function Comments({ postId }) {
    const comments = use(
        fetchData(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        )
    );

    return (
        <div>
            <h2>Comments</h2>

            <div>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
