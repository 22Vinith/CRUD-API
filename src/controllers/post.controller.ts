//import modules
import {postServices } from '../Services/post.service'
import { Request, Response } from 'express'
import Post from '../Models/posts'

class postController {
    //add post controller
    // Create a new post
    createPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const post = new Post(req.body);
      const savedPost = await post.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(400).json({ message: 'Error creating post' });
    }
  };

    //get all posts
    getPosts = async (req: Request, res: Response) => {
        try{
        const posts = await postServices.getPosts()
       return res.send(posts)
        }
        catch(err){
            console.log(err)
        }
    }


    //get a single post
    getAPost = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        try{
        const post = await postServices.getPost(id)
        res.send(post)
        }
        catch(err){
            console.log(err)
        }
    }

    //update post
    updatePost = async (req: Request, res: Response) => {
        const id = req.params.id
        try{
       const post = await postServices.updatePost(id, req.body)  
        res.send(post)
        }
        catch(err){
            console.log(err)
        }
    }


    //delete a post
    deletePost = async (req: Request, res: Response) => {
        const id = req.params.id
        try{
        await postServices.deletePost(id)
        res.send('post deleted')
        }
        catch(err){
            console.log(err)
        }
    }

}

//export class
export const PostController = new postController()