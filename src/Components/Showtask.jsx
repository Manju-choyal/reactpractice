import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Showtask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/tasks/get');
        console.log("API Response:", response.data);
        if (Array.isArray(response.data.data)) {
          setTasks(response.data.data)
        } else {
          console.error('error');
        }
      } catch (err) {
        console.log("Error:", err);
        alert("Error fetching tasks");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading tasks...</p>
      </div>
    );
  }
  // function doEdit(index) {


  // }
  // function doDelete(index) {
  //   const confirmDelete = window.confirm("Are you sure you want to delete this task?");
  //   if (confirmDelete) {

  //     if (index >= 0 && index < tasks.length) {

  //       const updatedTasks = tasks.filter((task, i) => i !== index);
  //       setTasks(updatedTasks);
  //     } else {
  //       console.log('Invalid index');
  //     }
  //   }
  // }
  return (
    <div className="tasks-container">
      <h1 className="tasks-header">Task List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task-item" key={task.id}>
              <h3>{index + 1}.
                <br />
                {"Title : " + task.title}</h3>
              <p><strong>Desc : </strong> {task.discription}</p>
              {/* <button className="edit" style={{ backgroundColor: "lightblue" }} onClick={() => doEdit(index)}>Edit</button> */}
              {/* <button className="delete" style={{ backgroundColor: "lightblue" }} onClick={() => doDelete(index)}>Delete</button>  */}
              <Link to={`/edit?id=${task._id}`}>Edit</Link>
            </div>
          ))}
        </div>
      )}
    </div>

  );
}
export default Showtask;


