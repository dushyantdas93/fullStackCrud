import User from "../models/user.model.js"

export const getAllUsers = async (req,res)=>{
    try {
        const getusers = await User.find()
        if(!getusers){
            res.json({success:false,msg:" not get users successfully"})
        }
        else{
            res.json({success:true,msg:"get users successfully",data:getusers})

        }

      
    } catch (error) {
        res.json({success:true,msg:"user not found"})
    }
}

export const createUser = async (req,res)=>{
    const {name,email} = req.body
    try {
       const exits = await User.findOne({email})
       if(exits){
        return res.json({success:false,msg:"user allready Exits"})
       }

       const create = await User.create({name,email})
       if(create){
        console.log("hello");
        res.json({success:true,msg:"user created successfully",data:create})  
       }
    } catch (error) {
        res.json({success:true,msg:"user not found"})
    }
}

export const getUser = async (req,res)=>{
    try {
        const getusers = await User.findById(req.params.id)
        if(!getusers){
            res.json({success:false,msg:" not get users successfully"})
        }
        else{
            res.json({success:true,msg:"get users successfully",data:getusers})

        }
    } catch (error) {
        res.json({success:true,msg:"user not found"})
    }
}

export const updateUser = async (req,res)=>{
    const {name,email}= req.body
    try {
        const update = await User.findByIdAndUpdate({_id:req.params.id},{name,email},{new:true})
        if(!update){
            res.json({success:false,msg:"user not update successfully"})
        }
        else{
            res.json({success:true,msg:"updated  user successfully",data:update})

        }
    } catch (error) {
        res.json({success:true,msg:"user not found"})
    }
}

export const deleteUser = async (req,res)=>{
    try {
        const getusers = await User.findByIdAndDelete(req.params.id)
        if(!getusers){
            res.json({success:false,msg:"user not delete successfully"})
        }
        else{
            res.json({success:true,msg:"get delete successfully"})

        }
    } catch (error) {
        res.json({success:true,msg:"user not found"})
    }
}

