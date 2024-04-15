"use client";

export default function PostCard({ children, postId }) {
    return (
        <div className="flex flex-col box-2">
            {children}

            <div className="mt-6">
                <button
                    onClick={() => console.log(`You liked post id: ${postId}`)}
                >
                    Like
                </button>
            </div>
        </div>
    );
}
