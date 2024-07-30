const express = require("express");
const { User } = require("../models");
const router = express.Router();
const conn = require("../connection");

router.put("/update/:id", async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  //normally add some checks for the id

  try {
    console.log("try");
    const user = await User.updateOne({ _id: userId }, updateData);
    if (user.n === 0) {
      return res.sendStatus(404);
    }
    return res.status(200).send({ status: 1, result: user });
  } catch (e) {
    return res
      .status(500)
      .send({ status: 0, message: "unable to update user", error: e.message });
  }
});

module.exports = router;
