export const fetchComments = async (postId) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    return res.json();
};
