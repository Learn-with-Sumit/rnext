import wait from "@/utils/wait";

export default async function getPost(postId) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    await wait(2000);

    return response.json();
}
