const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  } else {
    return res.status(401).json({ message: "please login first" });
  }
};

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to the server server locally running",
  });
});

app.get("/api/user", isLoggedIn, (req, res) => {
  console.log(req.body.id);
  res.status(200).send({
    message: "user profile is return",
  });
});

app.listen(3001, () => {
  console.log(`server is running at http://localhost:3001`);
});
