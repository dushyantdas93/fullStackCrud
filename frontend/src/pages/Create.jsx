import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
    const [user,setUser]= useState({name:"",email:""})

    const hdlChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8000/api/v1/create",user)
        navigate("/")

    }
  return (
    <div>
        <Link to={"/"}><button>BACK TO HOME</button></Link>

        <form action="" onSubmit={handleSubmit} >
            <input type="text" placeholder='Enter your name' name="name" required  onChange={hdlChange}/>
            <input type="email" placeholder='Enter your email' name="email" required  onChange={hdlChange}/>
            <button type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Create