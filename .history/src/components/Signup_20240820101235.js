import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import './Signup.css';


function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const newUser = { id: nanoid(), username, password };
        await axios.post('http://localhost:5000/users', newUser);
        navigate('/'); 
    };

    return (
        <div className="signin-form">
        <h1> Sign </h1>
        <form onSubmit={handleSignup}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default Signup;