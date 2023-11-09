import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
//import ApiService from "../services/ApiServices";


const DoctorPage = () => {
    const [patientInfo, setPatientInfo] = useState(null); // Använd för att lagra patientinformation
    const [newNote, setNewNote] = useState(''); // Använd för att lagra ny patientnotering
    const [messages, setMessages] = useState([]); // Använd för att lagra meddelanden

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

    const handleNewNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewNote(e.target.value);
    };

    const handleNewNoteSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Här kan du implementera logik för att skicka ny patientnotering
        console.log('New note:', newNote);
        // Lägg till API-anrop eller annan logik för att skicka patientnoteringen
    };

    const handleReply = (message: any) => {
        // Här kan du implementera logik för att svara på meddelanden
        console.log('Replying to message:', message);
        // Lägg till API-anrop eller annan logik för att svara på meddelanden
    };

    return (
        <div>
            <h2>Doctor Page</h2>
            {patientInfo && (
                <div>
                    <h3>Patient Information</h3>
                    {/* Visa patientinformation här */}
                </div>
            )}
            <div>
                <h3>New Patient Note</h3>
                <form onSubmit={handleNewNoteSubmit}>
                    <input type="text" value={newNote} onChange={handleNewNoteChange} />
                    <button type="submit">Add Note</button>
                </form>
            </div>
            <div>
                <h3>Messages</h3>
                {/* Visa meddelanden och implementera svarslogik här */}
            </div>
        </div>
    );
};

export default DoctorPage;
