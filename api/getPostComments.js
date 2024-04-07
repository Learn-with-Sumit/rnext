import wait from "@/utils/wait";

export default async function getPostComments(postId) {
    const comments = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    await wait(3000);

    return comments.json();
}
