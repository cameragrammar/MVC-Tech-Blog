const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comment, Post } = require("../models");

router.get("/", (req, res) => {
  res.render("index", {});
});

router.get("/login", (req, res) => {
  res.render("login", {});
});

router.get("/home", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log("Posts:", posts);
    res.render("home", {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//router.get("/dashboard/create", (req, res) => {
//if (!req.user) {
//res.redirect("/login");
//return;
//}
//res.render("createpost", {
// loggedIn: req.user,
//});
//});

module.exports = router;
