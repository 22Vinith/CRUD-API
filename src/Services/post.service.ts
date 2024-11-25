//import module
import Post, { IPosts } from '../Models/posts'
import logger from '../Config/logger';
import { Document } from 'mongoose';

class postService {
    //create post
    async createPost(data: IPosts): Promise<Document> {
        try {
            const newPost = await Post.create(data);
            logger.info('Post created successfully');
            return newPost;
        } catch (error) {
            const errorMessage = (error as Error).message;
            logger.error(`Error creating post: ${errorMessage}`);
            throw error;
        }
    }

    
      // get all posts
      async getPosts(): Promise<Document[]> {
        try {
            const posts = await Post.find({});
            logger.info('Posts retrieved successfully');
            return posts;
        } catch (error) {
            const errorMessage = (error as Error).message;
            logger.error(`Error retrieving posts: ${errorMessage}`);
            throw error;
        }
    }

    // get post by id
    async getPost(id: string): Promise<Document | null> {
        try {
            const post = await Post.findById(id);
            if (post) {
                logger.info(`Post with ID ${id} retrieved successfully`);
            } else {
                logger.warn(`Post with ID ${id} not found`);
            }
            return post;
        } catch (error) {
            const errorMessage = (error as Error).message;
            logger.error(`Error retrieving post with ID ${id}: ${errorMessage}`);
            throw error;
        }
    }


    //update the post
    async updatePost(id: string, data: IPosts): Promise<Document | string> {
        try {
            const updatedPost = await Post.findByIdAndUpdate(id, data, { new: true });
            if (updatedPost) {
                logger.info(`Post with ID ${id} updated successfully`);
                return updatedPost;
            } else {
                logger.warn(`Post with ID ${id} not found`);
                return 'Post not available';
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            logger.error(`Error updating post with ID ${id}: ${errorMessage}`);
            throw error;
        }
    }

    //delete a post by using the find by id and delete 
    async deletePost(id: string): Promise<Document | string> {
        try {
            const deletedPost = await Post.findByIdAndDelete(id);
            if (deletedPost) {
                logger.info(`Post with ID ${id} deleted successfully`);
                return deletedPost;
            } else {
                logger.warn(`Post with ID ${id} not found`);
                return 'Post not available';
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            logger.error(`Error deleting post with ID ${id}: ${errorMessage}`);
            throw error;
        }
    }

}
//export the class
export const postServices = new postService()