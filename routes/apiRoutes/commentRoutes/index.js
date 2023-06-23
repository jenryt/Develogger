const router = require("express").Router();
const {
  getAllComment,
  newComment,
  updateComment,
  deleteComment,
} = require("../../../controllers/commentRoutes");
const loggedinAuth = require("../../../utils/loggedinAuth");

// GET all comments (no particular users)
router.get("/", loggedinAuth, getAllComment);

// POST to create new comment and assign it to the user
router.post("/new", loggedinAuth, newComment);

// PUT to update a comment
router.put("/:id", loggedinAuth, updateComment);

// DELETE to delete a comment
router.delete(":id", loggedinAuth, deleteComment);

module.exports = router;
