import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'

const Get = () => {
    
const [users,setUsers] = useState([])
    const fetchData = async ()=>{
        const { data }= await axios.get("http://localhost:8000/api/v1/getAll")
       
       console.log(data.data)
       setUsers(data.data)     
    }


    useEffect(()=>{fetchData()},[])
    
  return (
    <div>
     {users.length == 0 ? (<p>user not found</p>) : (users.map((item,idx)=>{
        return  <form key={idx} action="">
        <input type="text" placeholder='enter Your name' name='name' value={item.name} />
        <input type="email" placeholder='enter Your email' name='email' value={item.email} />
        <button type='submit'>Update</button>
        <button >Delete</button>
    </form>
       }))}
    </div>
  )
}

export default Get