const createError = require("http-errors");
const users = require("../models/userModel");

const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "user profile is return",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };