import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const newUser = { id: nanoid(), username, password };
        await axios.post('http://localhost:5000/users', newUser);
        navigate('/Home');
    };

    return (
        <div className="signin-form">
            <div className="signup-containerr">
                <div className='sign-image'>
                    <img src="sign.png" alt="sign" width={200} height={200} />
                </div>
                <h1> Sign Up </h1>
                <form onSubmit={handleSignup}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                    <div className="terms">
                        <input type="checkbox" id="terms" name="terms" required />
                        <label htmlFor="terms">I agree to the Terms and Conditions</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <p>Already have an account? <a href="/Log">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;