const express = require("express");
const { User } = require("../models");
const router = express.Router();
const conn = require("../connection");

router.get("/read", async (req, res) => {
  try {
    console.log("try");
    const filter = {};
    const user = await User.find(filter);
    return res.status(200).send({ status: 1, result: user });
  } catch (e) {
    return res
      .status(500)
      .send({ status: 0, message: "unable to find user", error: e.message });
  }
});

module.exports = router;
