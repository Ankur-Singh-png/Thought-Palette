//This file contains all the functions used in Authentication file
import {db} from "../db.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const register = (req,res)=>{

    //Check if its existing user or not
    const q= "SELECT * FROM users WHERE email = ? OR username= ?"
    db.query(q,[req.body.email, req.body.username], (err, data)=>{
        if(err) return res.json(err)

        // If there is no error that means the record exists in database
        if(data.length) return res.status(409).json("User already exists!");
          
        //If user is not registered we need to create the account but before saving the password we need to encrypt it 
        //Therefore we gonna use a library called Bcrypt.js
        //It Hashes the password and then create the user

        //Bcrypt.js simply takes the password and returns us a hashcode
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //Now insert the new user to our Database
        const q= "INSERT INTO users( `username`, `email`, `password`) VALUES(?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err)

            res.status(200).json("User has been created")
        })
    });
}

export const login = (req,res)=>{
    //Checking user existing or not
    const q= "SELECT * FROM users WHERE username = ? ";

    db.query(q, [req.body.username], (err,data)=>{
        if(err) return res.json(err);
        if(data.length===0) return res.status(404).json("User not found!");
        
        //Check password by comparing it with the hash password present in the database by using compareSync function
        const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password) 
        
        if(!isPasswordCorrect) 
            return res.status(400).json("Your username or password is incorrect")

        //We now will be generating a token to authenticate users as user can only delete there own post not others post
        //The token will be stored inside cookies of the browser and checked whenever required
        //Data here is the userInfo which will be used to delete posts
        const token = jwt.sign({ id: data[0].id }, "jwtkey")
        const {password, ...other}=data[0]
        //Data object which contains username,password, email we should store them in cookies so separating them


        //To use cookies we need another library called cookie-parser and include it in index.js
        res.cookie("access_token", token, {
            httpOnly:true
            //Now only api requests can access our cookies
        }).status(200).json(other)

    });
}

export const logout = (req,res)=>{

    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("User Has been logged out")
}