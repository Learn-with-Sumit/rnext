type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
    console.log("Fetching Posts");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}