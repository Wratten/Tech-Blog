const { Post, User } = require("../../models");
const router = require("express").Router();

router.get("/dashboard", (req, res) => {
  Post.findAll({
    include: [
      {
        model: User,
      },
    ],
  }).then((posts) => {
    const postsJson = posts.map((post) => post.toJSON());

    console.log(postsJson);
    res.render("dashboard", {
      posts: postsJson,
    });
  });
});

module.exports = {
  router,
};
