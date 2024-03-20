const fetchPosts = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // reject();
        }, 2000);
    });
    return "Here are my posts";
};

export default async function Posts() {
    const posts = await fetchPosts();

    return <div>{posts}</div>;
}
