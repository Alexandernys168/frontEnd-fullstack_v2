import React from 'react';
import LoginPage from './components/LoginPage';
import PatientPage from './components/PatientPage';
import DoctorPage from './components/DoctorPage';
import StaffPage from './components/StaffPage';
import RegisterForm from "./components/RegisterForm";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>My App</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/patient">Patient Page</a></li>
                    <li><a href="/doctor">Doctor Page</a></li>
                    <li><a href="/staff">Staff Page</a></li>
                    <li><a href ="/registerForm">Register</a></li>
                </ul>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/patient" element={<PatientPage />} />
                    <Route path="/doctor" element={<DoctorPage />} />
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="/registerForm" element={<RegisterForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
