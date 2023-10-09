import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const [task, setTask] = useState({
      title: "",
      desc: "",
      cover: "",
    });
    const [error,setError] = useState(false)
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8800/tasks", task);
        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true)
      }
    };
  
    return (
      <div className="items-center text-center flex flex-col">
        <h1 className="text-center font-bold text-5xl mt-10 mb-10">Add New Task</h1>
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
        <button className="bg-yellow-200 rounded-lg p-2 m-6 shadow-lg" onClick={handleClick}>Add</button>
        {error && "Something went wrong!"}
        <Link to="/">See all tasks</Link>
      </div>
    );
  };
  
  export default Add;