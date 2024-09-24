import Link from "next/link";
import { getAllPosts } from "@/queries/blog-data";
import PostList from "@/app/components/posts/post-list";


export default async function PostByTagPage({params: {id}}) {
  const posts = await getAllPosts([id]);
  const tags = posts[0].node.tags;
  const foundTag = tags.find((tag) => tag.id === id);

  return (
    <div className="flex flex-col">
      <div className="flex pt-4 pl-4 mb-8 text-2xl">
        <p className="mr-2">
          {posts.length} posts found for the tag <strong>{foundTag.name}</strong>
        </p>   
        <span className="mr-2">|</span>
        <Link 
          className="underline"
          href="/blog"
          >
            See all the posts
          </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
}