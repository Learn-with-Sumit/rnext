export default function Posts({ posts, onDeletePost, onEditClick }) {
    return (
        <div>
            <h2>All Posts</h2>
            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <span>{post.id}</span>
                            <span>{post.title}</span>
                            <div>
                                <span onClick={() => onDeletePost(post.id)}>
                                    ❌
                                </span>
                                <span onClick={() => onEditClick(post)}>
                                    ✏️
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
