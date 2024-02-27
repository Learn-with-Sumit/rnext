const { Blog } = require("../model/blog.model");
const { BlogService } = require("../services/blog.service");
const getAuthUser = require("../util/getAuthUser");

const getAllBlogs = async (req, res) => {
  //Query - limit, start, page
  const { limit, page } = req.query;

  // Handle if no query
  const query = {
    limit: 10,
    page: 1,
  };

  if (limit) {
    query.limit = parseInt(limit);
  }
  if (page) {
    query.page = parseInt(page);
  }

  const blogs = BlogService.getBlogs(query);

  res.status(200).json(blogs);
};

const getSingleBlog = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ message: "Blog postId is required" });
  }

  const blog = BlogService.getSingleBlog(postId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  if (req?.claims?.email) {
    const user = getAuthUser(req);
    blog.isFavourite = user.favourites.some((fav) => fav.id == blog.id);
  }

  res.status(200).json(blog);
};

const createNewBlog = async (req, res) => {
  const { title, content, tags } = req?.body || {};

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  if (!tags) {
    return res.status(400).json({ message: "Tags are required" });
  }

  const author = getAuthUser(req);

  if (req?.file?.filename) {
    req.body.thumbnail = req?.file?.filename;
  }

  const newBlog = BlogService.createNewBlog(req.body, author);

  res.status(201).json({
    status: "success",
    message: "Blog created successfully",
    blog: newBlog,
  });
};

const deleteBlog = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ message: "Blog postId is required" });
  }

  const blog = BlogService.getSingleBlog(postId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  Blog.deleteById(postId);

  res.status(200).json({ message: "Blog deleted successfully" });
};

const updateBlog = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ message: "Blog postId is required" });
  }

  if (req?.file?.filename) {
    req.body.thumbnail = req?.file?.filename;
  }

  const response = BlogService.updateBlog(postId, req.body);

  res.status(200).json(response);
};

const getPopularBlogs = async (req, res) => {
  const { limit } = req?.query;

  const popularBlogs = BlogService.popularBlogs(limit);
  return res.status(200).json(popularBlogs);
};
const getFavoriteBlogs = async (req, res) => {
  const user = getAuthUser(req);

  const favoriteBlogs = BlogService.favoriteBlogs(user);
  return res.status(200).json(favoriteBlogs);
};

const likeABlog = async (req, res) => {
  const { postId } = req.params;
  const user = getAuthUser(req);

  const blog = BlogService.likeABlog(postId, user);

  res.status(200).json(blog);
};

const commentBlog = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  if (!postId) {
    return res.status(400).json({ message: "Blog postId is required" });
  }

  if (!content) {
    return res.status(400).json({ message: "Comment content is required" });
  }

  const { id, firstName, lastName, avatar } = getAuthUser(req);
  const author = { id, firstName, lastName, avatar };
  const blog = BlogService.commentAPost(postId, { content, author });

  res.status(200).json(blog);
};

const deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;

  if (!postId) {
    return res.status(400).json({ message: "Blog postId is required" });
  }

  if (!commentId) {
    return res.status(400).json({ message: "Comment id is required" });
  }

  const blog = BlogService.deleteComment(postId, commentId);

  res.status(200).json(blog);
};

const toggleFavourite = async (req, res) => {
  const { postId } = req.params;
  const user = getAuthUser(req);

  const blog = BlogService.toggleFavorite(postId, user);

  res.status(200).json(blog);
};

module.exports.BlogController = {
  getAllBlogs,
  getSingleBlog,
  createNewBlog,
  deleteBlog,
  updateBlog,
  getPopularBlogs,
  getFavoriteBlogs,
  likeABlog,
  commentBlog,
  toggleFavourite,
  deleteComment,
};
