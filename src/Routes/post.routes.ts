//importing modules
import express from "express";
import { PostController } from '../controllers/post.controller'

//initiating the router
export const router = express.Router()

//add post route
router.post('/',PostController.createPost)

//get posts
router.get('/', PostController.getPosts)

//get single post
router.get('/:id', PostController.getAPost)

//update a post
router.put('/:id', PostController.updatePost)

//delete a post
router.delete('/:id', PostController.deletePost)