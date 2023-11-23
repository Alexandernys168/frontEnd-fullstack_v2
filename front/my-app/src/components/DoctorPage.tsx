import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiServices';
import {Patient} from "../interface/interface";

const DoctorPage = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        // Fetch list of patients when the component mounts
        const fetchPatients = async () => {
            try {
                const fetchedPatients = await ApiService.getPatients(); // Fetch patients from API
                setPatients(fetchedPatients); // Set the fetched patients in state
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div>
            <h1>List of Patients</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.userId}>
                        {patient.name} - {patient.userId}
                        <Link to={`/doctor/selectedPatient/${patient.userId}`}>
                            <button>Select Patient</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorPage;