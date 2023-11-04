const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Server is running");
});

app.listen(3001, () => {
  console.log(`server is running at http://localhost:3001`);
});
