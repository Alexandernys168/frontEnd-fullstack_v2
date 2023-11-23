import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Encounter, Patient, PatientDetails} from "../interface/interface";
import ApiServices from "../services/ApiServices";
import ApiService from "../services/ApiServices";


const SelectedPatientPage = () => {
    const {patientId} = useParams<{ patientId?: string }>();
    const [patientDetails, setPatientDetails] = useState<Patient>(); // Update 'any' with the actual patient details interface/type
    const [previousEncounters, setPreviousEncounters] = useState<Encounter[]>([]);
    const [previousObservations, setPreviousObservations] = useState<Encounter[]>([]);
    const [note, setNote] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (patientId) {
            // Fetch patient details based on the patientId using an API call or local storage
            ApiServices.getPatientById(parseInt(patientId)).then((data) => setPatientDetails(data));
            ApiService.getAllEncountersByPatientId(parseInt(patientId)).then((data) => setPreviousEncounters(data));
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
                    timeStamp: new Date().toISOString()
                };
                console.log("Encounter is: " + encounterCreation);


                // Create the observation associated with the encounter
                const observationCreation = await ApiServices.addObservationToEncounter(encounterCreation, observationData);

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
                    <div>
                        <h3>Messages</h3>
                        {/* Display messages */}
                    </div>
                    <div>
                        <h3>Previous Encounters</h3>
                        <div>
                            {previousEncounters.map((encounter, index) => (
                                <div key={index}>
                                    {/* Render encounter details */}
                                    <p>Date: {encounter.timeStamp}</p>
                                    <p>PatientId: {encounter.patientId}</p>
                                    {/* Other encounter details */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectedPatientPage;
