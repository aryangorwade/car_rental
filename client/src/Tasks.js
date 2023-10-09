import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/tasks");
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTasks();
  }, []);

  console.log(tasks);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/tasks/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="justify-center items-center">
      <h1 className="text-center pt-10 text-5xl font-bold">Sticky Notes</h1>
      <div className="mt-10">
        {tasks.map((task) => (
          <div key={task.id} className="ml-96 mr-96 p-4 shadow-2xl mb-12 bg-green-200">
            <h1 className="text-3xl font-bold underline mb-5">{task.title}</h1>
            <p className="text-base mb-5">{task.desc}</p>
            <button className="bg-red-200 rounded-lg p-2 mr-2" onClick={() => handleDelete(task.id)}>Delete</button>
            <button className="bg-blue-200 rounded-lg p-2">
              <Link
                to={`/update/${task.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="font-bold text-2xl">
        <Link className="rounded-lg bg-purple-500/50 p-2 ml-96 shadow-2xl" to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new task
        </Link>
      </button>
    </div>
  );
};

export default Tasks;