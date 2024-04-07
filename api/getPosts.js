import wait from "@/utils/wait";

export default async function getPosts() {
    const posts = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`
    );

    await wait(1000);

    return posts.json();
}
