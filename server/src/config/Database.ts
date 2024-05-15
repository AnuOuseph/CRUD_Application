import { connect } from "mongoose"

const DbConnect = async (url : string) => {
    try{
        await connect(url).then(() => {
            console.log("Database Connected")
        }).catch((error) => {
            console.log(error)
        })
    }catch(error){
        console.log(error)
    }
}

export default DbConnect