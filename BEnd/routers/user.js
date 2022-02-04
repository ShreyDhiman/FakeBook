const express = require("express");
const res = require("express/lib/response");
const { User } = require("../user");
const router = new express.Router();

// router.get("/", (req, res) => {
//   document.location.href = "./fakebook.html";
//   res.end("");
// });

// user signup

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

//user Login
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("invalid Cred");
    } else {
      const users = await User.findOne({ password: req.body.password });
      if (!users) {
        res.send("invalid Cred");
      } else {
        console.log(user);
        res.send({ user });
      }
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

// user profile
router.get("/user", async (req, res) => {
  try {
    const user = await User.find({});
    if (!user) {
      res.send("No user found");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
