import React, { useEffect, useState } from 'react';
import './Addtask.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

function Addtask() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [usersId, setUsersId] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const cookies = new Cookies();
    let users = cookies.get('users');
    setUsersId(users._id)
  }, [])
  async function doAddTask(e) {
    e.preventDefault()
    axios.post('http://127.0.0.1:5000/tasks/add', { title: title, discription: discription, usersId: usersId })
    console.log(title, discription, usersId);


    navigate("/dashboard")
  }
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>AddTask Here</h3>

        <label htmlFor="title">Title</label>
        <input type='text' placeholder='Enter User title' id="title" onChange={(e) => setTitle(e.target.value)}
          value={title}></input>

        <label htmlFor="discription">Discription</label>
        <input type='text' placeholder='Enter User discription' id="discription" onChange={(e) => setDiscription(e.target.value)}
          value={discription}></input>

        <button className='signup' onClick={doAddTask}>AddTask</button>


      </form>
    </div>
  );
}

export default Addtask;
