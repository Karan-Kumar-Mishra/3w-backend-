import express from "express";
import * as router from "./router/index.js";
import * as middleware from "./middleware/index.js";
import cors from "cors";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import path from "path";
import * as database from "./database/index.js"
import dotenv from "dotenv";

const app = express();
dotenv.config();
database.connectdb();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = file.originalname;
        cb(null, uniqueSuffix);
    },
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middleware.bodyParserJson);
app.use(middleware.bodyParserUrlencoded);

const upload = multer({ storage: storage });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.post("/images", upload.single("avatar"), async (req, res, next) => {
    const uploadResult = await cloudinary.uploader
        .upload(
            req.file.path, {
            folder: req.body.name
        }
        )
        .catch((error) => {
            console.log(error);
        });

    let user = {
        usr: req.body,
        urls: uploadResult.url
    }
    database.addUsers(user);
   
    res.redirect(process.env.CLIENT_URL);
});
app.get("/allUsers", (req, res) => {
    database.getUsers().then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log("error in gettting user", err);
        res.send(err)
    })
});

app.post("/getusr", (req, res) => {
    database.getuser(req.body.name).then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log("error in gettting user", err);
        res.send(err)
    })

});

app.get("/", (req, res) => {
    res.send("hello clint");
});

app.listen(80, () => {
    console.log("server is running ..");
});