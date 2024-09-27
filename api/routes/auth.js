//This file contains authentication of user 

import express from "express";
import { login, logout, register } from "../controller/auth.js";

const router = express.Router();

//Instead of writing all the code in one file we divided the code in file
//we divided the code in controller folder files and now we just need to call the function from the folder file 
//Remember to import the file with the extension(.js here) as we are importing them as module

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router;
