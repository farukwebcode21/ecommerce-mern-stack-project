require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 3002;
const mongoDbUrl =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/e-commerceMrnDB";
const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/user_default.png";

module.exports = { serverPort, mongoDbUrl, defaultImagePath };
