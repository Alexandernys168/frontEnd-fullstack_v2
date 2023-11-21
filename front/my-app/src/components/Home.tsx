import React, { useState } from 'react';
import ApiService from '../services/ApiServices';
import { useNavigate } from 'react-router-dom';
import {User} from "../interface/interface";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const users: User[] = await ApiService.getUsers();
            const authenticatedUser = users.find(
                (user) => user.name === username && user.password === password
            );

            if (authenticatedUser) {
                // Redirect to 'My Page' on successful login
                //navigate('/my-page');
                alert("its working!");
            } else {
                // Handle incorrect credentials
                alert('Invalid username or password\nUser[] was:' +  JSON.stringify(users));

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
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit">Login</button>
                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};

export default LoginForm;

