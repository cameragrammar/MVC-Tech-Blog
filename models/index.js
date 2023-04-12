const sequelize = require("../config/connection");
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

User.init({}, { sequelize, modelName: "user" });
Post.init({}, { sequelize, modelName: "post" });
Comment.init({}, { sequelize, modelName: "comment" });

//create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comment };
