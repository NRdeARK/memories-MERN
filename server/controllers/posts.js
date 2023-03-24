import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        //find is asyn action so need to put await and async
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message});  
    }  
}
export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}