import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controller/post.js";

const router = express.Router();

//Instead of writing all the code in one file we divided the code in file
//we divided the code in controller folder files and now we just need to call the function from the folder file 
//Remember to import the file with the extension(.js here) as we are importing them as module
router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)


export default router;
