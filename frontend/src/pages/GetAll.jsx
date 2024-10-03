import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const GetAll = () => {
    const [users,setUsers] = useState([])

    const fetchData = async ()=>{
        const {data} = await axios.get("http://localhost:8000/api/v1/getAll")
        console.log(data.data)
        setUsers(data.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <Link to={"/create"}><button>Add</button></Link>
        <h1>Get All User</h1>


{!users ? (<p>User not found</p>) : (users.map((item,idx)=>{
 return   <li key={idx}>{item.name}{item.email} <Link to={`/update/${item._id}`}><button>update</button></Link><Link to={`/delete/${item._id}`}><button>delete</button></Link></li>
})) }
    </div>
  )
}

export default GetAll