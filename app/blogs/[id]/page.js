import blogs from "@/app/data/blogs";

export function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export default function SingleBlog({ params }) {
    const { id } = params;
    const blog = blogs.find((blog) => blog.id === id);
    const { title, description } = blog;

    return (
        <div className="p-8">
            <h1 className="text-xl font-blod">{title}</h1>
            <p className="mt-6">{description}</p>
        </div>
    );
}
