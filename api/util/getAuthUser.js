const { User } = require("../model/user.model");
module.exports = (req) => {
  const { email } = req?.claims || {};
  try {
    const user = User.findUserByEmail(email);

    if (!user) {
      throw new Error("User not found with the Token");
    }

    const newUserObj = Object.assign({}, user);
    delete newUserObj.password;

    return newUserObj;
  } catch (e) {
    console.error(e);
    throw new Error("User not found", e.message);
  }
};
