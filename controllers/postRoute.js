const { User, Post, Comment } = require("../models");

// GET all posts (no particular users)
const getAllPost = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET posts by user (lists of particular user's posts)
const getPostsByUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST to create new post and assign it to the user
const newPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT to update a post
const updatePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE to delete a post
const deletePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPost,
  getPostsByUser,
  newPost,
  updatePost,
  deletePost,
};
