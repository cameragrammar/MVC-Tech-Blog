const router = require("express").Router();
const { Comment } = require("../../models");

//GET all comments
router.get("/", async (req, res) => {
  Comment.findAll();
});

//CREATE a comment
router.post("/", async (req, res) => {
  Comment.create();
});

//EDIT a comment
router.put("/", async (req, res) => {
  Comment.update();
});

//DELETE a comment by ID
router.delete("/", async (req, res) => {
  Comment.destroy();
});

module.exports = router;
