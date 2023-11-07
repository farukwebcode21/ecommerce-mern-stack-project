const express = require("express");
const userRouter = express.Router();

const users = [
  { id: 1, name: "Faurk Ahmad" },
  { id: 2, name: "Rupel Ahmad" },
  { id: 3, name: "Farid Ahmad" },
  { id: 4, name: "Sumon Ahmad" },
  { id: 5, name: "Hasan Ahmad" },
];

userRouter.get("/api/users", (req, res) => {
  res.status(200).send({
    message: "user profile is return",
    users: users,
  });
});

module.exports = userRouter;
