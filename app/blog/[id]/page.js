export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id;

    // fetch data
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: post.title.slice(0, 100),
        description: post.body.slice(0, 100),
        openGraph: {
            images: [
                {
                    url: `http://localhost:3000/api/og?title=${post.title.slice(
                        0,
                        100
                    )}`,
                    width: 1200,
                    height: 600,
                },
            ],
        },
    };
}

export default async function BlogPage({ params: { id } }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return (
        <div className="p-8 text-slate-800">
            <h1 className="text-xl font-semibold">{post.title}</h1>

            <div className="mt-6">{post.body}</div>
        </div>
    );
}
