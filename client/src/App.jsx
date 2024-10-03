import React from "react";
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";

export default function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async()=>{
    const {data} = await axios.get("http://localhost:8000/api/v1/getAll")
    console.log(data)
    setUsers(data.data)
  }

  useEffect(()=>{
   fetchAllUsers();
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {data} = await axios.post("http://localhost:8000/api/v1/create",user)
    console.log(data);
    if(data.success){
      setUsers([...users, data.data]);
      setUser({ name: "", email: "" });
      // console.log(users);
    }
  };


  return (
    <div>
      <h1>Crud Operation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          value={user.email}
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      <h1>List of Users</h1>
      {users.map((item, index) => {
        return (
          <>
          <form onSubmit={async(e)=>{
            e.preventDefault();
            const {data} = await axios.patch(`http://localhost:8000/api/v1/update/${item._id}`,{
              name:item.name,
              email:item.email
            })
            if(data.success){
              alert(data.msg);
            }else{
              alert(data.msg)
            }
          }}>
            <input
              type="text"
              name="name"
              value={item.name}
              placeholder="name"
              onChange={(e)=>{
                const newUsers = [...users];
                newUsers[index][e.target.name]=e.target.value
                setUsers(newUsers)
              }}
            />
            <input
              type="text"
              name="email"
              value={item.email}
              placeholder="email"
              onChange={(e)=>{
                const newUsers = [...users];
                newUsers[index][e.target.name]=e.target.value
                setUsers(newUsers)
              }}
            />
            <button type="submit">update</button>
            
          </form>
          <button onClick={async()=>{
              const {data}=await axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
              if(data.success){
                const newUsers= [...users];
                newUsers.splice(index,1);
                setUsers(newUsers)
              }else{
                // alert(data.msg);
              }
            }}>delete</button>

</>

        );
      })}
    </div>
  );
}
