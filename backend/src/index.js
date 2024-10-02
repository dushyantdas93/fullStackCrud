import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import userRoute from "../routes/user.route.js"

dotenv.config()

 const app = express()

 app.use(cors({origin:"http://localhost:5173",Credential : true,}))

 app.use(express.json())
 const PORT =  8000
 

 const conn = async (req,res)=>{
   mongoose.connect("mongodb+srv://dushyantmanikpuri018:dushyantCRUD@cluster0.qzcj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("mongodb connected successfully")
    app.listen(PORT,()=>{
        console.log(`server is running port ${PORT}` )
     })
   }).catch(()=>{
    console.log("mongodb not connected successfully")
   })
 }

 conn()


 app.use("/test",(req,res)=>{
    res.json({msg:"test route work"})
 })


 app.use("/api/v1",userRoute)