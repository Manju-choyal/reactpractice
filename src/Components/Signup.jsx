import React, { useState } from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  // const navigate = useNavigate();
    
    function doSignup(e){
      
      e.preventDefault();
     axios.post('http://127.0.0.1:5000/users/add',{name,email,password})
    //  navigate('/login');
     console.log(name,email,password);
    }
return (
	<div>

    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form>
        <h3>Signup Here</h3>
       <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter User Name" id="username"
        onChange={(e)=>setName(e.target.value)}
        value={name}/>

		<label htmlFor="email">Email</label>
		<input type='text'placeholder='Enter User Email'id="Email"onChange={(e)=>setEmail(e.target.value)}
        value={email}></input>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter User Password" id="password"onChange={(e)=>setPassword(e.target.value)}
        value={password}/>
        <button className='signup'onClick={doSignup}>Signup</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>Facebook</div>
        
        </div>
       
      
    </form>

	   
	</div>
  );
}

export default Signup;
