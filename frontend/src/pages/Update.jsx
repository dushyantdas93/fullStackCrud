import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "", email: "" });
  const getuser = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/v1/get/${id}`);

    setUser({
      name: data.data.name,
      email: data.data.email,
    });
  };
  
  useEffect(()=>{
    getuser();
  },[])

  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createUser = await axios.patch(
      `http://localhost:8000/api/v1/Update/${id}`,
      user
    );
    navigate("/");
  };

  return (
    <div>
      <Link to={"/"}>
        <button>back to home</button>
      </Link>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="enter your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="enter your email"
          onChange={handleChange}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default Update;
