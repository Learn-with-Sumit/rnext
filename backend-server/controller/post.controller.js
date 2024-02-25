const { PostService } = require("../services/post.service");
const getAuthUser = require("../util/getAuthUser");
const crypto = require("crypto");

const getPosts = (req, res) => {
  const { db } = req.app;
  const posts = db.get("posts").value();

  if (posts == null || posts == undefined || posts.length == 0) {
    return res.status(404).send({ message: "No posts found" });
  }

  return res.status(200).send(posts);
};

const createNewPost = (req, res) => {
  const { db } = req.app;
  const postSchema = {
    id: crypto.randomUUID(),
    content: "",
    image: null,
    postType: "text",
    author: {},
    comments: [],
    likes: [],
    createAt: new Date(),
  };

  const user = getAuthUser(req);
  const { id, name, avatar } = user;
  console.log(req?.body);
  const post = {
    postType: req?.file?.filename ? "image" : "text",
    content: req?.body?.formData?.content || "",
    image: req?.file?.filename ? `uploads/posts/${req?.file?.filename}` : null,
    author: { id, name, avatar },
  };

  const data = Object.assign({}, postSchema, post);

  db.get("posts").push(data).write();

  res.json(data);
};

const deletePost = (req, res) => {
  const { db } = req.app;
  const { postId } = req.params;

  const post = db.get("posts").find({ id: postId }).value();

  if (post == null || post == undefined || !post) {
    return res.status(404).send({ message: "No posts found" });
  }

  db.get("posts").remove({ id: postId }).write();

  return res.status(200).send({ message: "Post deleted successfully" });
};

const updatePost = (req, res) => {
  const { db } = req.app;
  const { postId } = req.params;

  const post = db.get("posts").find({ id: postId }).value();
  console.log(post);
  if (post == null || post == undefined || !post) {
    return res.status(404).send({ message: "No posts found" });
  }

  const updatedPost = db
    .get("posts")
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    .updateById(postId, { ...req.body })
    .write();

  return res.status(200).send(updatedPost);
};

const getSinglePost = (req, res) => {
  const { db } = req.app;
  const { postId } = req.params;

  const posts = db.get("posts").find({ id: postId }).value();

  if (posts == null || posts == undefined || !posts) {
    return res.status(404).send({ message: "No posts found" });
  }

  return res.status(200).send(posts);
};

const likeAPost = (req, res) => {
  const { postId } = req.params;
  const { db } = req.app;
  const user = getAuthUser(req);

  const response = PostService.likePost(postId, user, db);

  return res.status(200).send(response);
};

const commentPost = (req, res) => {
  if (
    !req.body?.comment ||
    req.body?.comment == null ||
    req.body?.comment == ""
  ) {
    return res.status(400).send({ message: "Comment cannot be empty" });
  }

  const { postId } = req.params;
  const { db } = req.app;
  const user = getAuthUser(req);

  const response = PostService.comment(postId, db, user, req.body?.comment);
  return res.status(200).send(response);
};

const deleteComment = (req, res) => {
  const { postId, commentId } = req.params;
  const user = getAuthUser(req);
  const { db } = req.app;

  const response = PostService.deleteComment(postId, commentId, db, user);

  return res.status(200).send(response);
};

module.exports.PostController = {
  getPosts,
  createNewPost,
  deletePost,
  updatePost,
  getSinglePost,
  likeAPost,
  commentPost,
  deleteComment,
};
