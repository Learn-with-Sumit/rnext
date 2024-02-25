const bcrypt = require("bcrypt");
const getNewTokens = require("../util/getNewTokens");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const login = async (email, password, db) => {
  const user = db.get("users").find({ email }).value();

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordCorrect = await bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error("Invalid password");
  }

  const tokens = getNewTokens(user);

  let userObj = Object.assign({}, user);
  delete userObj.password;

  return {
    user: userObj,
    token: tokens,
  };
};

const register = (reqBody, db) => {
  const { email, password, firstName, lastName } = reqBody;

  const user = db.get("users").find({ email }).value();

  if (user) {
    throw new Error("User already exists");
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  const newUser = {
    id: crypto.randomUUID({ disableEntropyCache: true }),
    password: hashedPassword,
    firstName,
    lastName,
    avatar: null,
    email,
  };

  db.get("users").push(newUser).write();

  const token = getNewTokens(newUser);

  delete newUser.password;

  return {
    user: newUser,
    token,
  };
};

const refreshToken = async (refreshToken, db) => {
  // check if refresh token valid
  const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);

  if (!decoded) {
    throw new Error("Invalid refresh token");
  }

  // check if user exists
  const user = db.get("users").find({ id: decoded.id }).value();

  if (!user) {
    throw new Error("User not found");
  }

  const token = getNewTokens(user);

  return token;
};

module.exports.UserService = {
  login,
  register,
  refreshToken,
};
