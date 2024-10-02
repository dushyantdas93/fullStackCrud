import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [user,setUser] = useState({name:"",email:""})
    useEffect(()=>{
    
        ;(async()=>{
           const {data} = await axios.get("http://localhost:8000/api/v1/getAll")
           
          setUser(data.data[id])
          console.log(user)
           
        })()
      },[])
   


    const hdlChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {data} = await axios.patch(`http://localhost:8000/api/v1/update/${user._id}`,{name:user.name,email:user.email})
    // console.log(data)
        navigate("/")

    }
  return (
    <div>
        <Link to={"/"}><button>BACK TO HOME</button></Link><Link to={"/create"}><button>ADD</button></Link>

        <form action="" onSubmit={handleSubmit} >
            <input type="text" placeholder='Enter your name' value={user.name}  name="name" required  onChange={hdlChange}/>
            <input type="email" placeholder='Enter your email' value={user.email}  name="email" required  onChange={hdlChange}/>
            <button type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Update