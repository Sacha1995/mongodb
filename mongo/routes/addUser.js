const express = require("express");
const { User } = require("../models");
const router = express.Router();
const conn = require("../connection");

router.post("/add", async (req, res) => {
  const userData = req.body;
  // const userData2 = {
  //   email: "r@r.r",
  //   userName: "Sacha",
  //   age: 29,
  //   isHappy: true,
  // };

  try {
    console.log("try");
    const user = new User(userData);
    const result = await user.save();
    return res.status(200).send({ status: 1, result: result });
  } catch (e) {
    return res
      .status(500)
      .send({ status: 0, message: "unable to add user", error: e.message });
  }
});

module.exports = router;
