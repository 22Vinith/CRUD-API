//import module
import Post from '../Models/posts'
export class postService {

    //create a post 
    async createPost(data: any) {     
            const newpost= await Post.create(data)
            return newpost
    }
    
    //get all posts
    async getPosts() {
            const posts = await Post.find({})
            return posts
        }

    //get a single post
    async getPost(id: string) {
            const post = await Post.findById(id)
            return post
    }

    //update a post
    async updatePost(id: string, data: any) {
                const postz = await Post.findByIdAndUpdate(id, data, {new: true})                
                    return "post not available"
    }

    //delete a post by using the find by id and delete 
    async deletePost(id: string) {
            const post = await Post.findByIdAndDelete(id)
                return 'post not available'  
    }
}

//export the class
export const postServices = new postService()