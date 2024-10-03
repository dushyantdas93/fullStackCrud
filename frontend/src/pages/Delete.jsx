import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const getuser =   async()=>{
const {data} = await axios.get(`http://localhost:8000/api/v1/get/${id}`)


    }

    getuser()

    const handleDelete = async()=>{
   const deleteuser = await axios.delete(`http://localhost:8000/api/v1/delete/${id}`)
   navigate("/")
    }

  return (
    <div>
        <h1>are you sure delete </h1>
        <button onClick={handleDelete}>Ok,delete</button>
        <Link to={"/"}><button>Cancle delete</button></Link>
    </div>
  )
}

export default Delete