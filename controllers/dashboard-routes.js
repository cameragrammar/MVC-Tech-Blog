const router = require("express").Router();
const { Post, User, Comment } = require("../models");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

router.get("/dashboard/create", ensureAuthenticated, async (req, res) => {
  res.render("createpost", {
    loggedIn: req.user,
  });
});

module.exports = router;
