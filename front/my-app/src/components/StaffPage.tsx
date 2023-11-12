import React, { useState, useEffect } from 'react';
//import ApiService from '../services/ApiServices'; // Du måste implementera denna service
import {doctors, staffs} from "../utils/mockData";

type MessageType = {
    id: number; // Adjust the type according to your actual data structure
    content: string; // Adjust the type according to your actual data structure
    // Add other properties as needed
};

const StaffPage = () => {
    const [messages, setMessages] = useState<MessageType[]>([]); // Använd för att lagra meddelanden
    const [selectedMessage, setSelectedMessage] = useState<MessageType | null >(null); // Använd för att lagra det valda meddelandet

    // Här kan du använda useEffect för att hämta meddelanden när komponenten renderas
    /*useEffect(() => {
        // Exempel på att hämta meddelanden
        ApiService.getMessages().then((data) => {
            setMessages(data);
        });
    }, []);*/

    const handleSelectMessage = (message: MessageType) => {
        // Uppdatera det valda meddelandet
        setSelectedMessage(message);
    };

    const handleReply = (message: MessageType) => {
        // Här kan du implementera logik för att svara på meddelanden
        console.log('Replying to message:', message);
        // Lägg till API-anrop eller annan logik för att svara på meddelanden
    };

    return (
        <div>
            <h2>Staff Page</h2>
            <h3>Available Staff´s</h3>
            {staffs.map((staff) => (
                <div key={staff.id}>
                    <p>Name: {staff.name}, Role: {staff.role}, Department: {staff.department}.</p>
                    <p></p>
                </div>
            ))}
            <div>
                <h3>Messages</h3>
                <ul>
                    {messages.map((message) => (
                        <li key={message.id} onClick={() => handleSelectMessage(message)}>
                            {message.content}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedMessage && (
                <div>
                    <h3>Selected Message</h3>
                    <p>{selectedMessage.content}</p>
                    {/* Implementera svarslogik för valt meddelande här */}
                </div>
            )}
        </div>
    );
};

export default StaffPage;
