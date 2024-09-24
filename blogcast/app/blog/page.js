import PostList from "../components/posts/post-list";
import { getAllPosts } from "@/queries/blog-data";

const BlogPage = async () => {
  const posts = await getAllPosts();
  return <PostList posts={posts} />;
};

export default BlogPage;
