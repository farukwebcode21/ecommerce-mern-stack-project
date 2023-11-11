const bcrypt = require("bcrypt");
const data = {
  users: [
    {
      name: "Faruk Ahmad",
      email: "farukbba0077@gmail.com",
      password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)),
      phone: "01744958549",
      address: "Dhaka Bangladesh",
    },
    {
      name: "Sure Ahmad",
      email: "maruk@gmail.com",
      password: bcrypt.hashSync("123456789", bcrypt.genSaltSync(10)),
      phone: "01744958549",
      address: "Pab-city Bangladesh",
    },
  ],
};

module.exports = data;
