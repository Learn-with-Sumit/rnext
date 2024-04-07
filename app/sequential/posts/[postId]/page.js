import getPost from "@/api/getPost";
import getPostComments from "@/api/getPostComments";

export default async function PostPage({ params: { postId } }) {
    const post = await getPost(postId);
    const comments = await getPostComments(postId);

    return (
        <div className="px-8">
            <h2 className="text-slate-800">{post.title}</h2>
            <p className="mt-4">{post.body}</p>
            <div className="mt-8 border-t border-slate-500 p-4 rounded">
                <h2 className="text-slate-800">Comments</h2>
                <div className="mt-4">
                    <ul className="text-slate-700">
                        {comments.map((comment) => (
                            <li className="mb-3" key={comment.id}>
                                {comment.id}. {comment.body}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
