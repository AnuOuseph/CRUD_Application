import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

import DbConnect from './config/Database'
import StudentRoutes from './modules/student/routes/StudentRoute'
import ErrorHandler from './middlewares/ErrorMiddleware'

config()

const app = express()

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
})); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing Middlewares
app.use('/', StudentRoutes)

// ErrorHandling Middleware
app.use(ErrorHandler);

// Database Connection
const Server = () =>{
    try{
        DbConnect(process.env.MONGO_URI!).then(() => {
            app.listen(process.env.PORT, ()=>{
                console.log("server connected")
            })
        })
    }catch(error){
        console.log(error)
    }
}
Server()

