import { useState } from "react";

export default function AddPost({ onAddPost }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,
        };
        onAddPost(newPost);

        // reset form
        setTitle("");
        setBody("");
    };

    return (
        <div>
            <h2>Add new post</h2>

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
