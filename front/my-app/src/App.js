import React from 'react';
import LoginPage from './components/LoginPage';
import PatientPage from './components/PatientPage';
import DoctorPage from './components/DoctorPage';
import StaffPage from './components/StaffPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>My App</h1>
                <ul>
                    <li><a href="/">Login</a></li>
                    <li><a href="/patient">Patient Page</a></li>
                    <li><a href="/doctor">Doctor Page</a></li>
                    <li><a href="/staff">Staff Page</a></li>
                </ul>
                <hr />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/patient" element={<PatientPage />} />
                    <Route path="/doctor" element={<DoctorPage />} />
                    <Route path="/staff" element={<StaffPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
