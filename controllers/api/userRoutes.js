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
      where: { email: req.body.email },
    });
    if (!userData) {
      // res.status(400).json({ message: "Incorrect username." });
      res.redirect("/login");
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      // res.status(400).json({ message: "Incorrect password." });
      res.redirect("/login");
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // res.json({ user: userData, message: "You are logged in!" });
      res.redirect("/dashboard");
    });
  } catch (err) {
    // res.status(400).json(err);
    console.error(err);
    res.redirect("/login");
  }
});

//LOGOUT a user
router.get("/logout", (req, res) => {
  console.log("req.session.logged_in: ", req.session.logged_in);

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
