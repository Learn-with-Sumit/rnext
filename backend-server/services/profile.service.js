const profile = (req, res) => {
  const { db } = req.app;
  const id = req.path.split("/")[2];

  // Get the user from the database
  const user = db.get("users").find({ id }).value();

  // Get the posts from the database
  const posts = db
    .get("posts")
    .filter({ author: { id: user.id } })
    .value();

  // Send the response
  return res.status(200).send({ user, posts });
};

module.exports.ProfileService = { profile };
