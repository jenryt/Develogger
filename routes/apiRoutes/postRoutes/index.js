const router = require("express").Router();
const {
  getAllPost,
  getPostsByUser,
  newPost,
  updatePost,
  deletePost,
} = require("../../../controllers/postRoute");
const loggedinAuth = require("../../../utils/loggedinAuth");

// GET all posts (no particular users)
router.get("/", loggedinAuth, getAllPost);

// GET posts by user (lists of particular user's posts)
router.get("/:username", loggedinAuth, getPostsByUser);

// POST to create new post and assign it to the user
router.post("/new", loggedinAuth, newPost);

// PUT to update a post
router.put("/:id", loggedinAuth, updatePost);

// DELETE to delete a post
router.delete(":id", loggedinAuth, deletePost);

module.exports = router;
