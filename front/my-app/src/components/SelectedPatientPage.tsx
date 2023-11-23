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
                    encounterId: encounterCreation,
                };
                console.log("Encounter is: " + encounterCreation, "encounterID: " + encounterCreation.id);


                // Create the observation associated with the encounter
                const observationCreation = await ApiServices.addObservationToEncounter(encounterCreation.id,observationData);

                if (observationCreation) {
                    // Observation created successfully and associated with the encounter
                    console.log('Observation created:', observationCreation);
                    // Perform any necessary action after successful creation
                } else {
                    console.error('Failed to create observation');
                    // Handle failed observation creation
                }
            } else {
                console.error('Failed to create encounter');
                // Handle failed encounter creation
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any other errors here
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
