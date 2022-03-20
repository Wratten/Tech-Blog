const { Post, User } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  Post.findAll({
    include: [
      {
        model: User,
      },
    ],
  }).then((posts) => {
    const postsJson = posts.map((post) => post.toJSON());

    console.log(postsJson);
    res.render("posts", {
      posts: postsJson,
    });
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
