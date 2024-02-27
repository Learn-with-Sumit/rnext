const { AuthService } = require("../services/auth.serivce");

/**
 * Handles the login functionality.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The result of the login operation.
 */
const login = async (req, res) => {
  if (!req?.body?.email || !req?.body?.password) {
    return res.status(400).json({ message: "Please provide email and password" });
  }

  const result = await AuthService.login(req.body);

  res.status(200).json(result);
};

/**
 * Registers a new user.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {string} req.body.firstName - The first name of the user.
 * @param {string} req.body.lastName - The last name of the user.
 * @param {Object} res - The response object.
 * @returns {Object} The result of the registration process.
 */
const register = (req, res) => {
  if (!req?.body?.email || !req?.body?.password || !req?.body?.firstName || !req?.body?.lastName) {
    return res.status(400).json({
      message: "Please provide email, password, firstName and lastName",
    });
  }

  const result = AuthService.register(req.body);

  res.status(201).json(result);
};

/**
 * Refreshes the access token using the provided refresh token.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The result of refreshing the token.
 */
const refreshToken = async (req, res) => {
  const { refreshToken } = req.body || {};

  if (!refreshToken) {
    return res.status(400).json({ message: "Please provide refreshToken" });
  }

  const result = await AuthService.refreshToken(refreshToken);

  res.status(200).json(result);
};

module.exports.AuthController = { login, register, refreshToken };
