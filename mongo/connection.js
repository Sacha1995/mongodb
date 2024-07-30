const mongoose = require("mongoose");
const { User } = require("./models");

const { PORT = 6001, MONGODB_URI = "mongodb://127.0.0.1/" } = process.env;

let conn;

// // Starts here
(async () => {
  try {
    conn = await mongoose.connect(MONGODB_URI);
    console.log("connected", conn);
    // this is for errors after a connection has been established

    mongoose.connection.on("error", (err) => {
      console.log(err);
    });
  } catch (error) {
    // this is for connection error
    console.log(error);
  }
})();

module.exports = mongoose;
