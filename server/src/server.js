const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to the server server locally running",
  });
});

app.get("/products", (req, res) => {
  res.status(200).send({
    message: "Products are returned",
  });
});

app.listen(3001, () => {
  console.log(`server is running at http://localhost:3001`);
});

app.use((req, res, next) => {
  res.header("Cache-Control", "no-store");
  next();
});
