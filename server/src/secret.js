require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 3002;
const mongoDbUrl =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/e-commerceMrnDB";

module.exports = { serverPort, mongoDbUrl };
