const router = require("express").Router();
const { signup, login, logout } = require("../../../controllers/userRoute");

// create new user and log in
router.post("/signup", signup);

// user login after checking credentials
router.post("/login", login);

// user logout
router.post("/logout", logout);

module.exports = router;
