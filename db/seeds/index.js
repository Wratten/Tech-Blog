const { User, Post, Comment } = require("../../models");
const sequelize = require("../connect");
const { faker } = require("@faker-js/faker");

function createUser() {
  const name = faker.name.firstName();

  return User.create({
    id: 24,
    username: "username",
    password: "password",
  });
}

function createPost(user) {
  return Post.create({
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(),
    user_id: user.id,
  });
}

function createComment(user, post) {
  return Comment.create({
    body: faker.lorem.paragraphs(1),
    user_id: user.id,
    post_id: post.id,
  });
}

async function seed() {
  const createdUsers = [];
  const createdPosts = [];
  const createdComments = [];

  // truncate
  await sequelize.sync({ force: true });

  // seed users
  for (let index = 0; index < 5; index++) {
    const created = await createUser();

    createdUsers.push(created);
  }

  // seed posts
  for (let index = 0; index < 5; index++) {
    const createdPost = await createPost(
      faker.random.arrayElement(createdUsers)
    );
    createdPosts.push(createdPost);
  }

  // seed comments

  for (let index = 0; index < 2; index++) {
    const createdComment = await createComment(
      faker.random.arrayElement(createdUsers),
      faker.random.arrayElement(createdPosts)
    );
    createdComments.push(createdComment);
  }
}

seed();
