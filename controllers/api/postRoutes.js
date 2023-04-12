const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({});
});

router.get("/", (req, res) => {
  Post.findOne({});
});

router.post("/", (req, res) => {
  Post.create({});
});

router.post("/", (req, res) => {
  Post.create({});
});

module.exports = router;
