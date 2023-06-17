const router = require("express").Router();
const userRoutes = require("./userRoutes/userRoutes");
const postRoutes = require("./postRoutes/postRoutes");
const commentRoutes = require("./commentRoutes/commentRoutes");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

// Catch-all route handler for undefined API routes
router.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

module.exports = router;
