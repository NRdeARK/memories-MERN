import express from "express";

const router = express.Router();

//this make localhost:5000/ -> http://localhost:5000/posts
router.get('/', (req, res) => {
    res.send('this works!');
});

export default router
