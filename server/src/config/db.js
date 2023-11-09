const mongoose = require("mongoose");
const { mongoDbUrl } = require("../secret");
const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(mongoDbUrl, options);
    console.log("connection to Mongodb successful established");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection error:", error);
    });
  } catch (error) {
    console.error("Could not connection to db: ", error.toString());
  }
};

module.exports = connectDatabase;
