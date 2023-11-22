import React, {useContext, useState} from 'react';
import ApiService from '../services/ApiServices';
import { useNavigate } from 'react-router-dom';
import {User} from "../interface/interface";
import {UserContext} from "./UserSession";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const user = { email, password, userType };
            const loginSuccess = await ApiService.loginUser(user);


            if (loginSuccess) {

                //localStorage.setItem('currentUser', JSON.stringify({ email, userType }));
                sessionStorage.setItem('currentUser', JSON.stringify({ email, userType }));

                setUser({ email, userType }); // Modify this according to the user data you receive
                if (userType === 'PATIENT') {
                    navigate('/patient'); // Redirect patient to their page
                } else if (userType === 'DOCTOR') {
                    navigate('/doctor'); // Redirect doctor to their page
                } else if (userType === 'OTHERS') {
                    navigate('/staff'); // Redirect others to their page
                }
                alert('Login successful!\nYou wrote: ' + email + ", " + userType);

            } else {
                // Handle incorrect credentials
                alert('Invalid username or password');
            }
        } catch (error) {
            // Handle API fetch error
            console.error('Error:', error);
        }
    };

    const handleRegister = () => {
        navigate("/registerForm");
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Role:
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="">Select role</option>
                        <option value="PATIENT">Patient</option>
                        <option value="DOCTOR">Doctor</option>
                        <option value="OTHERS">Staff</option>
                    </select>
                </label>
                <br />
                <button type="submit">Login</button>
                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};


export default LoginForm;

