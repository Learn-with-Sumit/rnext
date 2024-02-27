const { Blog } = require("../model/blog.model");
const { User } = require("../model/user.model");
const crypto = require("crypto");

/**
 * Creates a new blog.
 * @param {Object} body - The body of the blog containing title, content, and tags.
 * @param {Object} author - The author of the blog containing id, firstName, lastName, and avatar.
 * @returns {Object} - The newly created blog.
 */
const createNewBlog = (body, author) => {
  const { title, content, tags, thumbnail } = body;
  const { id, firstName, lastName, avatar } = author;

  //Create a new blog
  const newBlog = Blog.create({
    id: crypto.randomBytes(10).toString("hex"),
    title,
    content,
    thumbnail: thumbnail || null,
    author: { id, firstName, lastName, avatar },
    tags: tags,
    likes: [],
    comments: [],
    createdAt: new Date().toISOString(),
  });

  return newBlog;
};

/**
 * Retrieves a paginated list of blogs based on the provided query parameters.
 *
 * @param {Object} query - The query parameters for pagination (limit, page).
 * @param {number} query.limit - The maximum number of blogs to retrieve per page.
 * @param {number} query.page - The page number to retrieve.
 * @returns {Object} - An object containing the total number of blogs, current page number, limit, and the paginated blogs.
 */
const getBlogs = (query) => {
  const blogs = Blog.findAll();
  const { limit, page } = query;

  if (blogs.length === 0) {
    return { total: 0, blogs: [] };
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedBlogs = blogs.slice(start, end);

  // Make short blog descriptions
  const shortBlogs = paginatedBlogs.map((blog) => {
    return { ...blog, content: blog.content.slice(0, 180) + "..." };
  });

  return { total: blogs.length, page, limit, blogs: shortBlogs };
};

/**
 * Retrieves a single blog by its ID.
 * @param {string} id - The ID of the blog.
 * @returns {Object} - The blog object.
 */
const getSingleBlog = (id) => {
  const blog = Blog.findById(id);

  return blog;
};

const updateBlog = (postId, body) => {
  const blog = getSingleBlog(postId);

  if (!blog) {
    throw new Error("Blog not found");
  }

  const updatedBlog = Blog.updateById(postId, body);
  return updatedBlog;
};

const popularBlogs = (limit = 5) => {
  const blogs = Blog.findAll();
  const popularBlogs = blogs.sort((a, b) => b.likes.length - a.likes.length).slice(0, limit);

  if (popularBlogs.length === 0) {
    return { total: 0, blogs: [] };
  } else {
    return { total: popularBlogs.length, blogs: popularBlogs };
  }
};

const favoriteBlogs = (user) => {
  console.log(user.id);
  const blogs = User.findById(user.id).favourites;
  if (!blogs || blogs.length === 0) {
    return { total: 0, blogs: [] };
  }
  return { total: blogs.length, blogs };
};

const toggleFavorite = (postId, user) => {
  const blog = getSingleBlog(postId);
  if (!blog) {
    throw new Error("Blog not found");
  }

  // Toogle on User's favorite list
  const index = user.favourites?.findIndex((fav) => fav.id === postId);
  if (index === -1) {
    user.favourites.push({
      id: postId,
      title: blog.title,
      tags: blog.tags,
    });
  } else {
    user.favourites.splice(index, 1);
  }

  // Update user's favorite list
  User.updateById(user.id, { favourites: user.favourites });

  // Return blog with property of isFavorite
  return { ...blog, isFavourite: index === -1 };
};

const commentAPost = (postId, body) => {
  const blog = getSingleBlog(postId);

  if (!blog) {
    throw new Error("Blog not found");
  }

  const newComment = {
    id: crypto.randomBytes(10).toString("hex"),
    content: body.content,
    author: body.author,
  };

  blog.comments.push(newComment);
  const updatedBlog = Blog.updateById(postId, blog);
  return updatedBlog;
};

const deleteComment = (postId, commentId) => {
  const blog = getSingleBlog(postId);

  if (!blog) {
    throw new Error("Blog not found");
  }

  const index = blog.comments.findIndex((comment) => comment.id === commentId);
  if (index === -1) {
    throw new Error("Comment not found");
  }

  blog.comments.splice(index, 1);
  const updatedBlog = Blog.updateById(postId, blog);
  return updatedBlog;
};

const likeABlog = (postId, user) => {
  const blog = getSingleBlog(postId);

  if (!blog) {
    throw new Error("Blog not found");
  }
  console.log(blog);
  const index = blog.likes.findIndex((like) => like.id === user.id);
  if (index === -1) {
    blog.likes.push({ id: user.id });
  } else {
    blog.likes.splice(index, 1);
  }

  const updatedBlog = Blog.updateById(postId, blog);
  return { isLiked: index === -1, likes: updatedBlog.likes };
};

module.exports.BlogService = {
  createNewBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  popularBlogs,
  favoriteBlogs,
  toggleFavorite,
  commentAPost,
  deleteComment,
  likeABlog,
};
