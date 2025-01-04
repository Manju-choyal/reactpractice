import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Edit() {
    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")
    const [taskId, setTaskId] = useState("");
    const query = new URLSearchParams(useLocation().search)
    console.log(query.get('id'))
    const navigate = useNavigate()

    useEffect(() => {
        setTaskId(query.get('id'))
        axios.get('http://127.0.0.1:5000/tasks/get/' + query.get('id')).then(async (res) => {
            let task = await res.data.data[0];
            setTitle(task.title);
            setDiscription(task.discription);
        }).catch((error) => {
            console.log(error);

        })

    },[])
    function Update() {
        axios.patch('http://127.0.0.1:5000/tasks/update/' + taskId, { title: title, discription: discription }).then(async (res) => {
            navigate('/dashboard')
        })
    }
    return (
        <div className='task-from '>
            <h3>Task Edit</h3>
            <label htmlFor="title">Title</label>
            <input type='text' placeholder='Enter User title' id="title" onChange={(e) => setTitle(e.target.value)}
                value={title}></input>

            <label htmlFor="discription">Discription</label>
            <input type='text' placeholder='Enter User discription' id="discription" onChange={(e) => setDiscription(e.target.value)}
                value={discription}></input>

            <button className='signup' onClick={Update}>EditTask</button>


        </div>
    );
}

export default Edit;
