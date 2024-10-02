import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [user, setUser] = useState([]);
  const handleDelete = async (item) => {
    await axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`);
    fetchUser();
  };

  const fetchUser = async () => {
    const { data } = await axios.get("http://localhost:8000/api/v1/getAll");

    setUser(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Link to={"/create"}>
        <button>ADD USER</button>
      </Link>
      {user.map((item, idx) => {
        return (
          <li key={idx}>
            {item.name} {item.email}{" "}
            <Link to={`/update/${idx}`}>
              <button>UPDATE</button>
            </Link>{" "}
            <button onClick={() => handleDelete(item)}>DELETE</button>
          </li>
        );
      })}
    </div>
  );
};

export default Home;
