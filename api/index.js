import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"
import multer from 'multer'

const app = express()

app.use(express.json())
app.use(cookieParser())


//using multer directly will not save file along with there extensions and there file we cannot directly check them until its extension is know
//therefore we going to use the multer storage here
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //This cb takes link on where we want to store our uploded files
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      //cb name the file what name the file will be stored in the storage
      cb(null, Date.now()+file.originalname)
    }
  })

//Destination is defined in the multer function basically it creates a new folder and uploads all file in that folder
const upload = multer({ storage })

//Define endpoints below
//first endpoint that /upload here, second parameter defines how many files will be there so single in our case
//third is call back function
app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
})



app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(8800,()=> {
    console.log("Connected!")
})