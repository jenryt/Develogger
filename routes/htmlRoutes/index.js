const router = require("express").Router();
const { loggedinAuth } = require("../../utils/loggedinAuth");
const {
  renderHome,
  renderLogin,
  renderSignup,
} = require("../../controllers/htmlRoute");

router.get("/", renderHome);

router.get("/login", renderLogin);

router.get("/signup", renderSignup);

// // ↓↓↓ user is required to be logged in for further operation : loggedinAuth ↓↓↓
// // user's homepage/dashboard : show all logged-in user's posts
// router.get("/myPage", loggedinAuth);

// // to create a new post
// router.get("/newPost", loggedinAuth);

// // to leave comment on others' posts
// router.get("/post/:id", loggedinAuth);

module.exports = router;
