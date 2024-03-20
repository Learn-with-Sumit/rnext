import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/blogs";

export default function Blogs() {
    return (
        <div className="p-8">
            <h1 className="text-xl font-bold">Blog list</h1>
            <div className="mt-6 p-4">
                {blogs.map((blog) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`}>
                        <BlogItem title={blog.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
