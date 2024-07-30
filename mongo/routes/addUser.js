const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.post("/add", async (req, res) => {
  console.log("you get here 2");
  const userData = req.body;
  const userData2 = {
    email: "r@r.r",
    userName: "Sacha",
    age: 29,
    isHappy: true,
  };

  try {
    const user = new User(userData2);
    const result = await user.save();
    return res.status(200).send({ status: 1, result: result });
  } catch (e) {
    return res
      .status(500)
      .send({ status: 0, message: "unable to add user", error: e.message });
  }
});

module.exports = router;
