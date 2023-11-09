import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
// import ApiService from '../services/ApiServices'; // Du måste implementera denna service

const PatientPage = () => {
    const [patientInfo, setPatientInfo] = useState(null); // Använd för att lagra patientinformation
    const [newMessage, setNewMessage] = useState(''); // Använd för att lagra nytt meddelande
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

    const handleNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    const handleNewMessageSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Här kan du implementera logik för att skicka nytt meddelande
        console.log('New message:', newMessage);
        // Lägg till API-anrop eller annan logik för att skicka meddelandet
    };

    return (
        <div>
            <h2>Patient Page</h2>
            {patientInfo && (
                <div>
                    <h3>My Information</h3>
                    {/* Visa patientens information här */}
                </div>
            )}
            <div>
                <h3>New Message</h3>
                <form onSubmit={handleNewMessageSubmit}>
                    <input type="text" value={newMessage} onChange={handleNewMessageChange} />
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div>
                <h3>Messages</h3>
                {/* Visa meddelanden här */}
            </div>
        </div>
    );
};

export default PatientPage;
