const mongoose = require("mongoose");
const { User } = require("./models");

const { PORT = 3333, MONGODB_URI = "mongodb://127.0.0.1/" } = process.env;

// Starts here
(async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    // console.log("connected", conn);
    // this is for errors after a connection has been established

    const user = new User({
      email: "r@r.r",
      userName: "Sacha",
      age: 29,
      isHappy: true,
    });

    const result = await user.save();

    mongoose.connection.on("error", (err) => {
      console.log(err);
    });
  } catch (error) {
    // this is for connection error
    console.log(error);
  }
})();
