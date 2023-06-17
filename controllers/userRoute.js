const { User, Post, Comment } = require("../models");
const bcrypt = require("bcrypt");

// create new user and log in
const signup = async (req, res) => {
  try {
    // check if email has been used
    const checkEmail = await User.findOne({
      where: { email: req.body.emial.toLowerCase().trim() },
    });
    if (checkEmail) {
      return res.status(403).json({ message: "The email has been used!" });
    }

    // check if username has been used
    const checkUsername = await User.findOne({
      where: { username: req.body.username.trim() },
    });
    if (checkUsername) {
      return res.status(403).json({ message: "The username has been used!" });
    }

    // create an user
    const userData = await User.create({
      username: req.body.username.trim(),
      email: req.body.email.toLowerCase().trim(),
      password: req.body.password.trim(),
    });

    // log in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.name = userData.name;
    });

    // --------------OR--------------
    // req.session.user_id = userData.id;
    // req.session.logged_in = true;
    // req.session.name = userData.name;
    // req.session.save();

    res.status(200).json({
      message: `Greetings from Develogger, ${userData.username}! Let's embark on a journey of discovery and innovation.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// user login after checking credentials
const login = async (req, res) => {
  try {
    // check user's email
    const userData = await User.findOne({
      where: { email: req.body.email.toLowerCase().trim() },
    });

    if (!userData) {
      return res.status(401).json({
        message: `Oops! The email or password you entered is incorrect. Please try again.`,
      });
    }

    // check user's password
    const checkPw = bcrypt.compare(req.body.password, userData.password);

    if (!checkPw) {
      return res.status(401).json({
        message: `Oops! The email or password you entered is incorrect. Please try again.`,
      });
    }

    // log in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });

    res.status(200).json({
      message: `Welcome back, ${userData.username}! Let's continue our journey of discovery and innovation.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// user logout
const logout = async (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        return res.status(200).end();
      });
    }
    return res.status(404).end();
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { signup, login, logout };
