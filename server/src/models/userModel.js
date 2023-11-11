const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { defaultImagePath } = require("../secret");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minlength: [3, "The length of user name can be minimum 3 characters"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "User Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      set: (v) => bcrypt.hashSync(v.bcrypt.genSaltSync(10)),
    },
    image: {
      type: String,
      defaultImagePath,
    },
    address: {
      type: String,
      required: [true, "User Address is required"],
    },
    phone: {
      type: String,
      required: [true, "User Phone Number is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);

module.exports = User;
