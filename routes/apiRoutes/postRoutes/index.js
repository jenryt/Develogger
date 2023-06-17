const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Post, Comment } = require("../../../models");

// GET all posts (no particular users)
router.get("/");

// GET posts by user (lists of particular user's posts)
router.get("/:username");

// POST to create new post and assign it to the user

// PUT to update a post

// DELETE to delete a post
