import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Patient, PatientDetails} from "../interface/interface";
import ApiServices from "../services/ApiServices";


const SelectedPatientPage = () => {
    const { patientId } = useParams<{ patientId?: string }>();
    const [patientDetails, setPatientDetails] = useState<Patient>(); // Update 'any' with the actual patient details interface/type
    const [note, setNote] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (patientId) {
            // Fetch patient details based on the patientId using an API call or local storage
            ApiServices.getPatientById(parseInt(patientId)).then((data) => setPatientDetails(data));
        }
    }, [patientId]);

    const handleAddNote = async () => {
        try {
            // Create the encounter first
            const encounterData = {
                patientId: parseInt(patientId || ''),
                timeStamp: new Date().toISOString()

            };
            const encounterCreation = await ApiServices.createEncounter(encounterData);


            if (encounterCreation) {
                // If encounter creation was successful, add the observation
                const observationData = {
                    msg: note,
                    timeStamp: new Date().toISOString(),
                    encounterId: encounterCreation.id // Use the created encounter's ID
                };

                // Create the observation associated with the encounter
                const observationCreation = await ApiServices.createObservation(parseInt(patientId || ''),observationData);

                if (observationCreation) {
                    // Optionally navigate or perform other actions after successfully adding the observation
                    navigate(`/doctor/selectedPatient/${patientId}`);
                } else {
                    // Handle observation creation failure
                    console.error('Failed to create observation');
                }
            } else {
                // Handle encounter creation failure
                console.error('Failed to create encounter');
            }
        } catch (error) {
            // Handle any other errors here
            console.error('Error:', error);
        }
    };


    return (
        <div>
            {patientDetails && (
                <div>
                    <h2>Patient Details</h2>
                    <p>Name: {patientDetails.name}</p>
                    <p>Email: {patientDetails.email}</p>
                    {/* Display other patient details */}
                    <textarea
                        placeholder="Add note/message"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                    <button onClick={handleAddNote}>Add Note</button>
                </div>
            )}
        </div>
    );
};

export default SelectedPatientPage;
