import Link from "next/link";
import { getFormattedDate } from "@/utils";

export default function LatestPost({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="mt-4">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-gray-500">
          Posted on {getFormattedDate(post.publishedAt)}
        </p>
        <img
          alt="Cover image"
          className="mt-4 object-cover rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
          src={post.coverImage?.url}
        />
        <p className="mt-4 text-gray-700">{post.brief}</p>
      </article>
    </Link>
  );
}
