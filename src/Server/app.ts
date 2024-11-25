import express from 'express'
import { db} from '../Config/db.config'
import { router } from '../Routes/post.routes'
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import logger from '../Config/logger';

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());   // Enable CORS for all routes
app.use(helmet()); 


// Use Morgan with Winston
app.use(
    morgan('combined', {
      stream: {
        write: (message: string) => logger.info(message.trim()), // Morgan logs to Winston
      },
    })
  );

//routes
app.use('/api/v1/posts', router)

//db connection then server connection
db.then(() => {
    app.listen(7000, () => console.log('Server is listening on port 7000'))
})