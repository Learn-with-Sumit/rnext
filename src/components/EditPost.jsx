import { useState } from "react";

export default function EditPost({ post, onEditPost }) {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPost = {
            id: post.id,
            title,
            body,
        };
        onEditPost(updatedPost);

        // reset form
        setTitle("");
        setBody("");
    };

    return (
        <div>
            <h2>Edit post</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        placeholder="Post title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </p>

                <p>
                    <input
                        type="text"
                        placeholder="Post body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </p>

                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}
