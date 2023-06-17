const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Post, Comment } = require("../../../models");
