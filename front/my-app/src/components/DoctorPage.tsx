import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
//import ApiService from "../services/ApiServices";
import {doctors} from "../utils/mockData";
import {patients} from "../utils/mockData";


const DoctorPage = () => {
    const [selectedPatientId, setSelectedPatientId] = useState('');
    const [newNote, setNewNote] = useState(''); // Använd för att lagra ny patientnotering
    const [messages, setMessages] = useState([]); // Använd för att lagra meddelanden
    const [selectedPatientName, setSelectedPatientName] = useState('');
    const [submittedNotes, setSubmittedNotes] = useState<string[]>([]);

    // Här kan du använda useEffect för att hämta patientinformation och meddelanden när komponenten renderas
    /*useEffect(() => {
        // Exempel på att hämta patientinformation
        ApiService.getPatientInfo().then((data) => {
            setPatientInfo(data);
        });
        // Exempel på att hämta meddelanden
        ApiService.getMessages().then((data) => {
            setMessages(data);
        });
    }, []);*/
    const handlePatientSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        const selectedPatient = patients.find((patient) => patient.id.toString() === id);
        if (selectedPatient) {
            setSelectedPatientId(selectedPatient.id.toString());
            setSelectedPatientName(selectedPatient.name);
        }
    };

    const handleNewNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewNote(e.target.value);
    };

// Code for storing data in local storage
    const handleNewNoteSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = `Hello Dear Patient ${selectedPatientName}, ${newNote}`;
        const updatedNotes = [...submittedNotes, message];
        localStorage.setItem('submittedNotesDoctor', JSON.stringify(updatedNotes));
        setSubmittedNotes(updatedNotes);
        setNewNote('');
        // Add API call or other logic to send the patient note
    };

    // Code for retrieving data from local storage
    useEffect(() => {
        const storedNotes = localStorage.getItem('submittedNotesDoctor');
        if (storedNotes) {
            const allSubmittedNotes = JSON.parse(storedNotes);
            const doctorNotes = allSubmittedNotes.filter((note: string) =>
                note.includes('Hello Dear Patient')
            );
            setSubmittedNotes(doctorNotes);
        }
    }, []);

    const handleReply = (message: any) => {
        // Här kan du implementera logik för att svara på meddelanden
        console.log('Replying to message:', message);
        // Lägg till API-anrop eller annan logik för att svara på meddelanden
    };

    return (
        <div>
            <h2>Doctor Page</h2>

                <div>
                    <h3>All Doctors</h3>
                    {doctors.map((doctor) => (
                        <div key={doctor.id}>
                            <p>Name: {doctor.name}, Specialization: {doctor.specialization}, Experience: {doctor.experience}.</p>
                            <p></p>
                        </div>
                    ))}
                </div>

            <div>
                <h3>New Patient Note</h3>
                <label>Select Patient:</label>
                <select onChange={handlePatientSelect}>
                    <option value="">Select a patient</option>
                    {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                            {patient.name}
                        </option>
                    ))}
                </select>
                {selectedPatientId && (
                    <form onSubmit={handleNewNoteSubmit}>
                        <input
                            type="text"
                            value={newNote}
                            onChange={handleNewNoteChange}
                            placeholder={`Hello Dear Patient ${selectedPatientName}`}
                        />
                        <button type="submit">Add Note</button>
                    </form>
                )}
            </div>
            <div>
                <h3>Messages</h3>
                {submittedNotes.map((note: string, index: number) => (
                    <p key={index}>{note}</p>
                ))}
                {/* Visa meddelanden och implementera svarslogik här */}
            </div>
        </div>
    );
};

export default DoctorPage;
