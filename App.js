const path = require("path");

require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("passport");
const fs = require("fs");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
  defaultLayout: "main",
  helpers,
});

hbs.handlebars.registerPartial(
  "post-info",
  fs.readFileSync(__dirname + "/views/partials/post-info.handlebars", "utf8")
);

const sess = {
  secret: "cameragrammar",
  cookie: {
    maxAge: 30 * 60 * 1000, // 30 minutes
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// const sessionOptions = {
//   secret: "your session secret",
//   store: new SequelizeStore({
//     db: require("./config/connection"),
//   }),
//   resave: false,
//   saveUninitialized: false,
// };
// app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // console.log("adding req.isAuthenticated...");
  req.isAuthenticated = () => {
    console.log("req.session: ", req.session);
    return req.session.user_id;
  };

  next();
});

app.use("/dashboard", require("./controllers/dashboard-routes"));
app.use(routes);

const Post = require("./models/post");
const Comment = require("./models/comment");
const User = require("./models/user");

(async () => {
  // DROP ALL FOREIGN KEYS
  const results = (
    await sequelize.query(`
      SELECT concat('alter table \`',table_schema,'\`.\`',table_name,'\` DROP FOREIGN KEY ',constraint_name,';') AS query
      FROM information_schema.table_constraints
      WHERE constraint_type='FOREIGN KEY';
    `)
  )[0];

  for await (const { query } of results) {
    await sequelize.query(query);
  }

  await User.sync({ force: true });
  await Post.sync({ force: true });
  await Comment.sync({ force: true });

  sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  });
})();
