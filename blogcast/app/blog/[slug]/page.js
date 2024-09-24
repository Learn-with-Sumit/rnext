import PostDetails from "../../components/posts/post-details";
import { getPost } from "@/queries/blog-data";

const BlogDetailsPage = async ({params: {slug}}) => {
  console.log(slug);
  const post = await getPost(slug);
  return <PostDetails post={post} />;
};

export default BlogDetailsPage;
