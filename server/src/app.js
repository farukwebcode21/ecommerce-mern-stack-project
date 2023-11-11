const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");
const seedRouter = require("./routers/seedRouter");
const app = express();

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 100,
  max: 5,
  message: "Too many request this IP. please try again later",
});

app.use(rateLimiter);
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User Routers

app.use("/api/users", userRouter);

app.use("/api/seed", seedRouter);

// understand Middleware working system

// const isLoggedIn = (req, res, next) => {
//   const login = true;
//   if (login) {
//     req.body.id = 101;
//     next();
//   } else {
//     return res.status(401).json({ message: "please login first" });
//   }
// };

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "Welcome to the server server locally running",
//   });
// });

// app.get("/test", (req, res) => {
//   res.status(200).send({
//     message: "Welcome to test route",
//   });
// });

// client error handling
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

// server error handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
