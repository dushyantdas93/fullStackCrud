import mongoose, { model }  from "mongoose";

const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type : String,
        require:true,
    },
    email:{
        type : String,
        require:true,
    },
})


export default mongoose.model("User",userSchema)