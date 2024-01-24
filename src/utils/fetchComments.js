export const fetchComments = async (postId) => {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    return result.json();
};
