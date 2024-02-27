const bcrypt = require("bcrypt");
const getNewTokens = require("../util/getNewTokens");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { User } = require("../model/user.model");

/**
 * Authenticates a user by checking their email and password.
 *
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.email - The user's email address.
 * @param {string} credentials.password - The user's password.
 * @returns {Object} - An object containing the authenticated user and their token.
 * @throws {Error} - If the user is not found or the password is invalid.
 */
const login = async ({ email, password }) => {
  const user = User.findUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

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

/**
 * Registers a new user.
 * @param {Object} body - The user data.
 * @param {string} body.email - The email of the user.
 * @param {string} body.password - The password of the user.
 * @param {string} body.firstName - The first name of the user.
 * @param {string} body.lastName - The last name of the user.
 * @returns {Object} - An object containing the registered user and the authentication token.
 * @throws {Error} - If the user already exists.
 */
const register = (body) => {
  const { email, password, firstName, lastName } = body;

  const user = User.findUserByEmail(email);

  if (user) {
    throw new Error("User already exists");
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  const newUser = {
    id: crypto.randomBytes(10).toString("hex"),
    email,
    firstName,
    lastName,
    avatar: null,
    bio: "",
    password: hashedPassword,
    favourites: [],
  };

  // add user to db
  User.create(newUser);

  const token = getNewTokens(newUser);
  delete newUser.password;

  return {
    user: newUser,
    token,
  };
};

/**
 * Refreshes the access token using the provided refresh token.
 * @param {string} refreshToken - The refresh token.
 * @returns {string} - The new access token.
 * @throws {Error} - If the refresh token is invalid or the token type is invalid.
 * @throws {Error} - If the user associated with the refresh token is not found.
 */
const refreshToken = (refreshToken) => {
  // check if refresh token valid
  const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);

  if (!decoded) {
    throw new Error("Invalid refresh token");
  }

  if (decoded.type !== "refresh") {
    throw new Error("Invalid token type");
  }

  // check if user exists
  const user = User.findById(decoded.id);

  if (!user) {
    throw new Error("User not found");
  }

  const token = getNewTokens(user);

  return token;
};

module.exports.AuthService = {
  login,
  register,
  refreshToken,
};
