
import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate("")
  function doLogin(e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/users/login', { email: email, password: password }).then(async (res) => {
      console.log(res.data.data);
      const cookies = new Cookies();
      cookies.set('users', JSON.stringify(res.data.data.user))
      cookies.set('token', res.data.data.token)
      navigate('/container')
    })
  }
  return (
    <div className='body'>
      <div className='fullbody'>
        <div className="body-background">
          <div className="Shape"></div>
          <div className="Shape"></div>
        </div>
        <form>
          <h3>Login Here</h3>

          <label className="username">Email</label>
          <input type="text" placeholder="Email or Phone" id="username" onChange={(e) => { setEmail(e.target.value) }}
            value={email} />

          <label className="password">Password</label>
          <input type="password" placeholder="Enter User Password" id="password" onChange={(e) => { setPassword(e.target.value) }}
            value={password} />

          <button className='button' onClick={doLogin}>Log In</button>
          <div className="social">
            <div className="go"><i className="fab fa-google"></i>Google</div>
            <div className="fb"><i className="fab fa-facebook"></i>Facebook</div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

