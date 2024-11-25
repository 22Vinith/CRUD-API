//import modules
import {postServices } from '../Services/post.service'
import { Request, Response } from 'express'
import Post from '../Models/posts'
import logger from '../Config/logger';

class postController {

    // Create a new post
    createPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const post = new Post(req.body);
      const savedPost = await post.save();
      logger.info('Post added successfully');
      res.status(201).json(savedPost);
    } catch (err) {
        logger.error(`Error adding post: ${err}`);
      res.status(400).json({ message: 'Error creating post'});
  }
  };


    //get all posts
    getPosts = async (req: Request, res: Response) => {
        try{
        const posts = await postServices.getPosts()
        logger.info('Posts retrieved successfully');
       return res.send(posts)
        }
        catch(err){
            logger.error(`Error fetching posts: ${err}`);
            console.log(err)
        }
    }


    //get a single post
    getAPost = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        try{
        const post = await postServices.getPost(id)
        logger.info(`Post with ID ${id} retrieved successfully`);
        res.send(post)
        }
        catch(err){
            logger.error(`Error fetching post with ID ${id}: ${err}`);
            console.log(err)
        }
    }

    //update post
    updatePost = async (req: Request, res: Response) => {
        const id = req.params.id
        try{
       const post = await postServices.updatePost(id, req.body) 
       logger.info(`Post with ID ${id} updated successfully`);
        res.send(post)
        }
        catch(err){
            logger.error(`Error updating post with ID ${id}: ${err}`);
            console.log(err)
        }
    }


    //delete a post
    deletePost = async (req: Request, res: Response) => {
        const id = req.params.id
        try{
        await postServices.deletePost(id)
        logger.info(`Post with ID ${id} deleted successfully`);
        res.send('post deleted')
        }
        catch(err){
            logger.error(`Error deleting post with ID ${id}: ${err}`);
            console.log(err)
        }
    }

}

//export class
export const PostController = new postController()