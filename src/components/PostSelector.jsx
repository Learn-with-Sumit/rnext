export default function PostSelector({ posts, onSelectPost }) {
    return (
        <select onChange={onSelectPost}>
            <option value="">Select Post</option>
            {posts.map((post) => (
                <option key={post.id} value={post.id}>
                    {post.title}
                </option>
            ))}
        </select>
    );
}
