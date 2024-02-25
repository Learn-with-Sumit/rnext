const crypto = require("crypto");

const getPostById = (postId, db) => {
  return db.get("posts").find({ id: postId }).value();
};

const likePost = (postId, user, db) => {
  // We will get the user details from the token
  const { id } = user;

  // Get the post from the database
  const post = getPostById(postId, db);

  // Check if the user has already liked the post
  const isLiked = post.likes.includes(id);

  // If the user has already liked the post then we will unlike it
  if (isLiked) {
    // Remove the user id from the likes array
    const likes = post.likes.filter((like) => like !== id);
    db.get("posts").updateById(postId, { likes }).write();
    return { message: "Post Unliked", likeCount: likes.length };
  } else {
    // Add the user id to the likes array
    const likes = [...post.likes, id];
    db.get("posts").updateById(postId, { likes }).write();
    return { message: "Post Liked", likeCount: likes.length };
  }
};

const comment = (postId, db, user, comment) => {
  // We will get the user details from the token
  const { id, name, avatar } = user;

  // Get the post from the database
  const post = getPostById(postId, db);
  console.log(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  // Add the comment to the comments array
  const comments = [
    ...post.comments,
    { id: crypto.randomUUID(), comment, createdAt: new Date(), author: { id, name, avatar } },
  ];

  // Update the post with the new comments
  db.get("posts").updateById(postId, { comments }).write();

  // Send the response
  return { message: "Comment Added", commentCount: comments.length, comments };
};

const deleteComment = (postId, commentId, db, user) => {
  // Get the post from the database
  const post = getPostById(postId, db);

  // Remove the comment from the comments array
  const comments = post.comments.filter((comment) => comment.id !== commentId);

  // get the user info
  const { id } = user;

  // Only Post Author or Comment Author Able to delete the comment
  if (post.author.id != id || comments.find((comment) => comment.author.id !== id)) {
    throw new Error("You are not allowed to delete this comment");
  }

  // Check if the comment exists in comments array
  if (comments.length === post.comments.length) {
    throw new Error("Comment not found");
  }

  // Update the post with the new comments
  db.get("posts").updateById(postId, { comments }).write();

  // Send the response
  return { message: "Comment Deleted", commentCount: comments.length, comments };
};

module.exports.PostService = { likePost, comment, deleteComment };
