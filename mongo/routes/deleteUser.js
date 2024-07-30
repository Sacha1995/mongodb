const express = require("express");
const { User } = require("../models");
const router = express.Router();
const conn = require("../connection");

router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;

  //normally add some checks for the id

  try {
    const result = await User.deleteOne({ _id: userId });
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .send({ status: 0, message: "Could not find the user to delete" });
    }
    return res.status(200).send({ status: 1, result: result });
  } catch (e) {
    return res
      .status(500)
      .send({ status: 0, message: "unable to delete user", error: e.message });
  }
});

module.exports = router;
