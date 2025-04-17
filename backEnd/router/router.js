
import express from "express"

import { signUp,logIn , getUser, editUser} from "../controller/user_controller.js"

import { addPost,loadPosts, getPost,deleteProfile} from "../controller/post_controller.js"

import auth from "../middlewares/auth.js"

const insta_routes = express.Router()

insta_routes.post("/signUp",signUp)

insta_routes.post("/logIn",logIn)

insta_routes.post("/addPost/:id",addPost)


insta_routes.get("/loadPosts",auth,loadPosts)

insta_routes.get("/getUser/:id",getUser)

//get one user uploaded posts data
insta_routes.get("/getPost/:id",getPost)

//edit user details
insta_routes.post("/editUser/:id",editUser)

//delete user
insta_routes.get('/deleteProfile/:id',deleteProfile)

// insta_routes.get("/zx",zx)

export default insta_routes


