const express = require("express");
const { PostController } = require("../controller/post.controller");
const postImage = require("../middleware/postImage");

const router = express.Router();

router
  .route("/")
  .get(PostController.getPosts)
  .post(postImage.single("image"), PostController.createNewPost);

router
  .route("/:postId")
  .get(PostController.getSinglePost)
  .delete(PostController.deletePost)
  .patch(postImage.single("image"), PostController.updatePost);

router.patch("/:postId/like", PostController.likeAPost);

router.patch("/:postId/comment", PostController.commentPost);

router.delete("/:postId/comment/:commentId", PostController.deleteComment);

module.exports = router;
