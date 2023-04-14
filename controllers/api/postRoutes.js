const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

//GET all posts
router.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      attributes: ["title", "content", "author", "date_created"],
      include: [
        {
          model: Comment,
          attributes: ["user_id", "id", "post_id", "comment_text"],
          include: {
            model: User,
            attributes: ["username", "email"],
          },
        },
        {
          model: User,
          attributes: ["username", "email"],
        },
      ],
    });
    const posts = postsData.map((post) => post.get({ plain: true }));

    console.log("posts: ", posts);

    res.render("home", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET single post by ID
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findOne(postId, {
      include: [
        {
          model: Comment,
          attributes: ["user_id", "id", "post_id", "comment_text"],
          include: {
            model: User,
            attributes: ["username", "email"],
          },
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }

    const post = postData.get({ plain: true });

    res.render("post", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

// //Page Render for creating a new post
// router.get("/dashboard/create", async (req, res) => {
//   try {
//     res.render("createpost");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//CREATE a new post
router.post("/create", async (req, res) => {
  try {
    const { title, content } = req.body;

    const userId = req.session.userId;

    console.log("title: ", title);

    const newPost = await Post.create({
      title,
      content,
      user_id: userId,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ERROR" });
  }
});

//UPDATE a post by ID
router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.update(
      {
        contents: req.body.contents,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//DELETE a post by ID
router.delete("/", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
