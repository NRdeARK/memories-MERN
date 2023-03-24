import express from "express";

import { getPosts, createPosts } from "../controllers/posts.js";

const router = express.Router();

//this make localhost:5000/ -> http://localhost:5000/posts
router.get('/', getPosts);
router.post('/',createPosts)

export default router
