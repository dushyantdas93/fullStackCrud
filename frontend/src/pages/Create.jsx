import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [user,setUser] = useState({name:'',email:''})
    const navigate = useNavigate()
const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}

const handleSubmit  = async (e)=>{
    e.preventDefault()
    const createUser = await axios.post("http://localhost:8000/api/v1/create",user)
    navigate("/")

}

  return (
    <div>

<Link to={"/"}><button>back to home</button></Link>

<form action="" onSubmit={handleSubmit}>
    <input type="text" name='name' value={user.name} placeholder='enter your name' onChange={handleChange} />
    <input type="email" name='email' value={user.email} placeholder='enter your email' onChange={handleChange} />
    <button type='submit'>add</button>
</form>



    </div>
  )
}

export default Create