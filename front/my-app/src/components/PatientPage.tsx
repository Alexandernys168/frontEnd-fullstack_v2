import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
// import ApiService from '../services/ApiServices'; // Du måste implementera denna service
import {doctors, patients} from "../utils/mockData";

const PatientPage = () => {
    const [patientInfo, setPatientInfo] = useState(null); // Använd för att lagra patientinformation
    const [newMessage, setNewMessage] = useState(''); // Använd för att lagra nytt meddelande
    const [messages, setMessages] = useState<string[]>([]);
    const [selectedDoctorId, setSelectedDoctorId] = useState('');
    const [selectedDoctorName, setSelectedDoctorName] = useState('');

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

    useEffect(() => {
        const storedNotes = localStorage.getItem('submittedNotesPatient');
        if (storedNotes) {
            const parsedNotes = JSON.parse(storedNotes);
            const patientMessages = parsedNotes.filter((note: string) =>
                note.includes('Hello, Doctor')
            );
            setMessages(patientMessages);
        }
    }, []);
    const handleDoctorSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        const selectedDoctor = doctors.find((doctor) => doctor.id.toString() === id);
        if (selectedDoctor) {
            setSelectedDoctorId(selectedDoctor.id.toString());
            setSelectedDoctorName(selectedDoctor.name);
        }
    };

    const handleNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    const handleNewMessageSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = `Hello, Doctor ${selectedDoctorName}, ${newMessage}`;
        const updatedMessages = [...messages, message];
        localStorage.setItem('submittedNotesPatient', JSON.stringify(updatedMessages));
        setMessages(updatedMessages);
        setNewMessage('');
        // Add API call or other logic to send the message
    };

    return (
        <div>
            <h2>Patient Page</h2>
            <div>
                <h3>All Patients Information</h3>
                {/* Iterate through all patients and display their information  */}
                {patients.map((patient) => (
                    <div key={patient.id}>
                        <p>Name: {patient.name}, Age: {patient.age}, Condition: {patient.condition}.</p>
                        <p></p>
                        <p></p>
                    </div>
                ))}
            </div>

            <div>
                <h3>New Message</h3>
                <label>Select Doctor:</label>
                <select onChange={handleDoctorSelect}>
                    <option value="">Select a doctor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                            {doctor.name}
                        </option>
                    ))}
                </select>
                {selectedDoctorId && (
                    <form onSubmit={handleNewMessageSubmit}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={handleNewMessageChange}
                            placeholder={`Hello, Doctor ${selectedDoctorName}`}
                        />
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
            <div>
                <h3>Messages</h3>
                {messages.map((message,  index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
        </div>
    );
};

export default PatientPage;
