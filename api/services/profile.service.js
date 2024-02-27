const { Blog } = require("../model/blog.model");
const { User } = require("../model/user.model");

/**
 * Retrieves a user by their ID and returns their profile information along with their blogs.
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Object} - The user's profile information and blogs.
 * @throws {Error} - If the user is not found.
 */
const getUserById = (userId) => {
  const data = User.findById(userId);

  if (!data) {
    throw new Error("User not found");
  }

  // get users blogs
  const blogs = Blog.filter({ author: { id: userId } });

  delete data.password;
  return {
    ...data,
    blogs,
  };
};

/**
 * Updates the user profile with the given userId and body.
 * @param {string} userId - The ID of the user.
 * @param {object} body - The updated profile data.
 * @returns {object} - The updated user profile.
 * @throws {Error} - If the user is not found.
 */
const updateUserProfile = (user, body) => {
  const data = User.updateById(user.id, body);

  if (!data) {
    throw new Error("User not found");
  }

  delete data.password;

  return data;
};

module.exports.ProfileService = { getUserById, updateUserProfile };
