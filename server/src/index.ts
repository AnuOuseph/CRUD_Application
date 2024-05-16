import express from 'express'
import { config } from 'dotenv'
import DbConnect from './config/Database'
import StudentRoutes from './modules/student/routes/StudentRoute'

config()

const app = express()

//Middlewares
app.use(express.json());
app.use('/', StudentRoutes)

//Server and Database Connection
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

