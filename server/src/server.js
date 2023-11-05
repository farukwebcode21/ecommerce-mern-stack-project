const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// client error handling
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
  next();
});

// server error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("something broke !");
});

app.listen(3001, () => {
  console.log(`server is running at http://localhost:3001`);
});
