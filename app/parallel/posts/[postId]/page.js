import getPost from "@/api/getPost";
import getPostComments from "@/api/getPostComments";
import Comments from "@/app/components/Comments";
import { Suspense } from "react";

export default async function PostPage({ params: { postId } }) {
    const postPromise = getPost(postId);
    const commentsPromise = getPostComments(postId);

    const post = await postPromise;

    return (
        <div className="px-8">
            <h2 className="text-slate-800">{post.title}</h2>
            <p className="mt-4">{post.body}</p>
            <div className="mt-8 border-t border-slate-500 p-4 rounded">
                <h2 className="text-slate-800">Comments</h2>
                <div className="mt-4">
                    <Suspense
                        fallback={
                            <div className="loading">Loading comments...</div>
                        }
                    >
                        <Comments commentsPromise={commentsPromise} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
