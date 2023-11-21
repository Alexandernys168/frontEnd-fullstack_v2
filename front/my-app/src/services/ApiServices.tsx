import { User } from "../interface/interface";

const API_BASE_URL = 'http://localhost:8080'; // Byt ut med din backend URL


const ApiService = {
    getPatientInfo: () => {
        return fetch(`${API_BASE_URL}/patients`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getPatientById: (id: number) => {
        return fetch(`${API_BASE_URL}/patients/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getMessages: () => {
        return fetch(`${API_BASE_URL}/msgs`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av meddelanden');
                }
                return response.json();
            });
    },
    getMessagesById: (id: number) => {
        return fetch(`${API_BASE_URL}/msgs/user/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av meddelanden');
                }
                return response.json();
            });
    },
    getConversationById: (otherUserId: number) => {
        return fetch(`${API_BASE_URL}/msgs/conversation/${otherUserId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av meddelanden');
                }
                return response.json();
            });
    },
    getDoctorInfo: () => {
        return fetch(`${API_BASE_URL}/doctors`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getDoctorById: (id: number) => {
        return fetch(`${API_BASE_URL}/doctors/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getEncounterByPatientId: (patientId: number) => {
        return fetch(`${API_BASE_URL}/patient/${patientId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getOthers: () => {
        return fetch(`${API_BASE_URL}/others`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getOthersById: (id: number) => {
        return fetch(`${API_BASE_URL}/others/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getUsers: () => {
        return fetch(`${API_BASE_URL}/users`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    registerUser: async (user: User) => {
        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            return true; // Indicate successful registration
        } catch (error) {
            console.error('Registration Error:', error);
            throw new Error('Registration failed'); // Throw error for failed registration
        }
    }
    // Lägg till fler funktioner för att skicka data och utföra andra API-anrop
};

export default ApiService;
