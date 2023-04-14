const router = require("express").Router();
const { Post, User, Comment } = require("../models");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// router.get("/", (req, res) => {
//   res.render("dashboard", {});
// });

router.get("/create", ensureAuthenticated, async (req, res) => {
  res.render("createpost", {
    loggedIn: req.user,
  });
});

router.get("/", ensureAuthenticated, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        // {
        //   model: Comment,
        //   attributes: ["comment_text", "createdAt"],
        //   include: {
        //     model: User,
        //     attributes: ["username"],
        //   },
        // },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log("Posts:", posts);

    res.render("dashboard", {
      // loggedIn: req.session.user_id,
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
