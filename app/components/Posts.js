const fetchPosts = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
    return "Here are my posts";
};

export default async function Posts() {
    const posts = await fetchPosts();

    return <div>{posts}</div>;
}
