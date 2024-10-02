import express from "express"
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controller/user.controller.js"


const route = express.Router()

route.get("/getAll",getAllUsers)
route.get("/get/:id",getUser)
route.post("/create",createUser)
route.delete("/delete/:id",deleteUser)
route.patch("/update/:id",updateUser)



export default route;