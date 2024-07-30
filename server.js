const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware example function
const request = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};
app.use(request);

// Define routes
app.use("/users", require("./mongo/routes/addUser"));
app.use("/users", require("./mongo/routes/readUser"));
app.use("/users", require("./mongo/routes/updateUser"));
app.use("/users", require("./mongo/routes/deleteUser"));

// Start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
