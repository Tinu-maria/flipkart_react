import React, { useState, useEffect } from "react";
import "./product.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const payload = {
    username: username,
    password: password,
  };

  const onSubmitHandler = () => {
    axios.post(`http://localhost:8000/api/login/`, payload)

    .then((response) => {
      const response1 = response;
      navigate('/product/get')
      localStorage.setItem("stringify", JSON.stringify(response1));
      localStorage.setItem("Mytoken", response1.data.token);
    });
  };
      
    return (
      <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">

                <h2>Login</h2>

                <form action="">
                    <input className='form-control mb-3' type="text" 
                    placeholder='Enter the Username' value={username} 
                    onChange={(e)=> setUsername(e.target.value)}/>

                    <input className='form-control mb-3' type="text" 
                    placeholder='Enter the Password' value={password} 
                    onChange={(e)=> setPassword(e.target.value)}/>

                    <button onClick={onSubmitHandler} className='btn btn-secondary mt-3'>Login</button>
                </form>
            </div>
        </div>
      </div>
    )
}

export default Login;