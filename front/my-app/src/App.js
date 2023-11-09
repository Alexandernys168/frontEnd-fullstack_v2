import React from 'react';
import LoginPage from './components/LoginPage';
import PatientPage from './components/PatientPage';
import DoctorPage from './components/DoctorPage';
import StaffPage from './components/StaffPage';

function App() {
    const currentPath = window.location.pathname;

    const renderComponent = () => {
        if (currentPath === '/patient') {
            return <PatientPage />;
        } else if (currentPath === '/doctor') {
            return <DoctorPage />;
        } else if (currentPath === '/staff') {
            return <StaffPage />;
        } else {
            return <LoginPage />;
        }
    };

    return (
        <div>
            <h1>My App</h1>
            <ul>
                <li><a href="/">Login</a></li>
                <li><a href="/patient">Patient Page</a></li>
                <li><a href="/doctor">Doctor Page</a></li>
                <li><a href="/staff">Staff Page</a></li>
            </ul>
            <hr />
            {renderComponent()}
        </div>
    );
}

export default App;
