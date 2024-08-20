import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import './Signup.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
        if (response.data.length > 0) {
            
            onLogin(response.data[0]);
            navigate('/Home'); 
        } else {
            
            alert('Invalid username or password');
        }
    };

    return (

        
          

        <div class='login-form'>
            <div className="signup-container">
            <div className='sign-image'>
              <img src="sign.png" alt="sign" width={200}height={200}/>
            </div>  

            <h1> Login </h1>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>

        </div>
        </div>
    );
}

export default Login;