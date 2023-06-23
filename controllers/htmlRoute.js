const { User, Post, Comment } = require("../models");

const renderHome = async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["createdAt", "DESC"]],
      attributes: ["id", "title", "content", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          order: [["createdAt", "DESC"]],
          model: Comment,
          attributes: [
            "id",
            "commentContent",
            "username",
            "createdAt",
            "post_id",
          ],
          include: { model: User, attributes: ["name"] },
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in || false,
      user: req.session.user || null,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const renderLogin = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

const renderSignup = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { renderHome, renderLogin, renderSignup };
