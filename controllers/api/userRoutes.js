const router = require("express").Router();
const { User } = require("../../models");

//REGISTER a new user
router.post("/", async (req, res) => {
  try {
    console.log("body: ", req.body);
    const userData = await User.create(req.body);
    console.log(userData);
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    req.session.save(() => {
      // res.status(200).json(userData);
      res.redirect("/dashboard");
    });
  } catch (err) {
    // res.status(400).json(err);
    console.error(err);
    res.redirect("/login");
  }
});

//LOGIN a user
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res.status(400).json({ message: "Incorrect username." });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password." });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//LOGOUT a user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
