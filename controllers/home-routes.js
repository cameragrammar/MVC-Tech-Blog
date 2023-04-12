const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comment, Post } = require("../models");

router.get("/", (req, res) => {
  res.render("index", {});
});

router.get("/login", (req, res) => {
  res.render("login", {});
});

router.get("/home", (req, res) => {
  res.render("home", {});
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {});
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
