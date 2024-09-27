import {db} from "../db.js"
import jwt from 'jsonwebtoken'

export const getPosts = (req,res)=>{
    //The req.query property allows you to access the query parameters from the URL of an incoming HTTP request.
    //Query parameters are key-value pairs included in the URL after the “?” symbol, and they are separated by “&” symbols.
    const q = req.query.cat ? "SELECT * FROM posts WHERE category=?" : "SELECT * FROM posts";


    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);
        
        if (!Array.isArray(data)) {
            data = [data];
        }
        return res.status(200).json(data);
    });
}

export const getPost = (req,res)=>{
    const q =  "SELECT p.title, p.id, p.desc, p.date, p.img, p.category, u.username, u.img AS userImg FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?"

    db.query(q,[req.params.id], (err,data)=>{
        if(err) return res.status(500).json(err)
        
        console.log(data);
        return res.status(200).json(data[0])
    })
}

export const addPost = (req,res)=>{
    const token = req.cookies.access_token
    //Check if user has any token or not
    if(!token) return res.status(401).json("Not Authenticated!")

    //If he has a token check if user is authentic user or not
    jwt.verify(token, "jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token not valid!")
        const q = "INSERT INTO posts(`title`, `desc`, `img`, `category`, `date`, `uid`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id
        ];

        db.query(q,[values], (err,data)=>{
            if(err) {
                console.error("Error in adding post:", err);
                return res.status(500).json(err)
            }
            return res.json("Post has been created.")
        });
    });
}

export const deletePost = (req,res)=>{
    const token = req.cookies.access_token
    //Check if user has any token or not
    if(!token) return res.status(401).json("Not Authenticated!")

    //If he has a token check if user is authentic user or not
    jwt.verify(token, "jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token not valid!")

       const postId = req.params.id
       //Delete Specific Post of id of specific user uid
       const q= "DELETE FROM posts WHERE `id`= ? AND `uid`=?"

       db.query(q,[postId,userInfo.id],(err,data)=>{
        if(err) return res.status(403).json("You can delete only your posts!")

        return res.json("Post has been deleted!")
       })
    })
}

export const updatePost = (req,res)=>{
    const token = req.cookies.access_token
    //Check if user has any token or not
    if(!token) return res.status(401).json("Not Authenticated!")

    //If he has a token check if user is authentic user or not
    jwt.verify(token, "jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token not valid!")
        
        const postId = req.params.id;
        const q = "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `category`=? WHERE `id`=? AND `uid`=?";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
        ];

        db.query(q,[...values, postId, userInfo.id], (err,data)=>{
            if(err) return res.status(500).json(err)

            return res.json("Post has been Updated.")
        });
    });
}