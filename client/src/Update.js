import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [task, setTask] = useState({
    title: "",
    desc: "",
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const taskId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/tasks/${taskId}`, task);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="items-center text-center flex flex-col">
      <h1 className="text-center font-bold text-5xl mt-10 mb-10">Update Task</h1>
      <input
        className="border-2 shadow-lg border-black m-6"
        type="text"
        placeholder="Task title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        className="shadow-lg border-2 border-black"
        rows={5}
        type="text"
        placeholder="Task desc"
        name="desc"
        onChange={handleChange}
      />
      <button className="bg-blue-200 rounded-lg p-2 m-6 shadow-lg" onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all tasks</Link>
    </div>
  );
};

export default Update;