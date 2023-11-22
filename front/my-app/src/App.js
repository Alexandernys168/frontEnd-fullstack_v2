import React, {useContext} from 'react';
import LoginPage from './components/LoginPage';
import PatientPage from './components/PatientPage';
import DoctorPage from './components/DoctorPage';
import StaffPage from './components/StaffPage';
import RegisterForm from "./components/RegisterForm";
import {BrowserRouter, Navigate, Route, Router, Routes, useNavigate} from "react-router-dom";
import Home from "./components/Home";
import {UserProvider} from "./components/UserSession";
import {UserContext} from "./components/UserSession";
import PrivateRoute from "./components/PrivateRoute";
import SelectedPatientPage from "./components/SelectedPatientPage";






function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <div>
                    <h1>My App</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/patient">Patient Page</a></li>
                        <li><a href="/doctor">Doctor Page</a></li>
                        <li><a href="/staff">Staff Page</a></li>
                        <li><a href="/registerForm">Register</a></li>
                    </ul>
                    <hr/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>

                        <Route path="/patient" element={<PrivateRoute allowedUserTypes={['PATIENT']} ><PatientPage /></PrivateRoute>} />
                        <Route path="/doctor" element={<PrivateRoute  allowedUserTypes={['DOCTOR']} ><DoctorPage /></PrivateRoute>} />
                        <Route path="/doctor/selectedPatient/:patientId" element={<PrivateRoute  allowedUserTypes={['DOCTOR', 'OTHERS']} ><SelectedPatientPage /></PrivateRoute>} />
                        <Route path="/staff"  element={<PrivateRoute  allowedUserTypes={['OTHERS']} ><StaffPage /></PrivateRoute>}/>
                        <Route path="/registerForm" element={<RegisterForm />} />
                    </Routes>
                </div>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
