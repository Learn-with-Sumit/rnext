const getUserProfile = (req, res) => {
  const { userId } = req.params;
  const { db } = req.app;
  const user = db.get("users").find({ id: userId }).value();
  const posts = db
    .get("posts")
    .filter({ author: { id: userId } })
    .value();

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).send({ user, posts });
};

const updateUserProfile = (req, res) => {
  const { userId } = req.params;
  const { db } = req.app;

  const user = db.get("users").find({ id: userId }).value();

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  if (req?.file?.filename) {
    req.body.avatar = "uploads/avatar/" + req.file.filename;
  }

  const updatedUser = db.get("users").updateById(userId, Object.assign({}, req.body)).write();
  return res.status(200).send(updatedUser);
};

const uploadAvatar = (req, res) => {
  const { userId } = req.params;
  const { db } = req.app;

  const user = db.get("users").find({ id: userId }).value();

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  db.get("users")
    .updateById(userId, { avatar: "uploads/avatar/" + req.file.filename })
    .write();

  return res.status(200).send({
    message: "Avatar uploaded successfully",
    avatar: "uploads/avatar/" + req.file.filename,
  });
};

module.exports.ProfileController = {
  getUserProfile,
  updateUserProfile,
  uploadAvatar,
};
