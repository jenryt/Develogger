const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userSeedData = require("./userSeedData.json");
const postSeedData = require("./postSeedData.json");
const commentSeedData = require("./commentSeedData.json");

const seedDb = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- database synced -----\n");

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  console.log("'\n ----- Users seeded -----\n");

  let posts = [];
  for (const postData of postSeedData) {
    const post = await Post.create({
      ...postData,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    posts.push(post);
  }
  console.log("'\n ----- Post seeded -----\n");

  for (const commentData of commentSeedData) {
    await Comment.create({
      ...commentData,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: posts[Math.floor(Math.random() * posts.length)].id,
    });
  }
  console.log("'\n ----- Comment seeded -----\n");

  process.exit(0);
};

seedDb();
