const { User, Post, Comment } = require("../models");

// GET all posts (no particular users)
const getAllComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST to create new post and assign it to the user
const newComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT to update a post
const updateComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE to delete a post
const deleteComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllComment, newComment, updateComment, deleteComment };
