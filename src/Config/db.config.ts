//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

  //details from the env
const username = process.env.username
const password = process.env.password
const dbName = 'Post'

//connection string to mongo atlas
// const connectionString = `mongodb://localhost:27017/dbName`;


//db connection
export const db = mongoose.connect(`mongodb://localhost:27017/dbName`)
.then((res) => {
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
    
}).catch((err) => {
    console.log(err)
})