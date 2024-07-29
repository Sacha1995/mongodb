const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "300kb" }));

// Middleware example function
const request = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};
app.use(request);

// Define routes
// app.use("/user", require("./routes/user"));

// Start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
