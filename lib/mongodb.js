import mongoose from "mongoose"




const Connectdb = async() => {
  
    try {
        const MONGO_URL=process.env.MONGO_URL

        if(!MONGO_URL) {
            throw new Error("Please define MONGO_URL inside .env.local")
        }

        await mongoose.connect(MONGO_URL,{
            dbName:"crud",
            bufferCommands:false   
        })

        console.log("MongoDb Connected Successfully")


    } catch (error) {
        console.log("Mongob connection error",error)
        throw error
    }

}

export default Connectdb