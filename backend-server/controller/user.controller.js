const { UserService } = require("../services/user.serivce");

const login = async (req, res) => {
  if (!req?.body?.email || !req?.body?.password) {
    return res.status(400).json({ message: "Please provide email and password" });
  }

  const { email, password } = req.body;
  const { db } = req.app;

  const result = await UserService.login(email, password, db);

  res.status(200).json(result);
};

const register = (req, res) => {
  if (!req?.body?.email || !req?.body?.password || !req?.body?.firstName || !req?.body?.lastName) {
    return res.status(400).json({
      message: "Please provide email, password, firstName and lastName",
    });
  }

  const { db } = req.app;

  const result = UserService.register(req.body, db);

  res.status(201).json(result);
};

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body || {};

  if (!refreshToken) {
    return res.status(400).json({ message: "Please provide refreshToken" });
  }

  const { db } = req.app;

  const result = await UserService.refreshToken(refreshToken, db);

  res.status(200).json(result);
};

module.exports.UserController = { login, register, refreshToken };
