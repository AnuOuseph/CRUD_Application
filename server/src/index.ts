import express from 'express'
import { config } from 'dotenv'
import DbConnect from './config/Database'

config()

const app = express()

app.use('/', (req,res)=>{
    res.send("anu Ouseph")
})

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

