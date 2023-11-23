import {Encounter, LoginUser, Observation, User} from "../interface/interface";

const API_BASE_URL = 'http://localhost:8080'; // Byt ut med din backend URL


const ApiService = {
    getPatients: () => {
        return fetch(`${API_BASE_URL}/patients`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getPatientById: (id: number) => {
        return fetch(`${API_BASE_URL}/patient/${id}`)
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
        return fetch(`${API_BASE_URL}/encounter/patient/${patientId}`)
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
    getAllEncountersByPatientId: (patientId: number) => {
        return fetch(`${API_BASE_URL}/encounter/patient/${patientId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    createEncounter: async (encounter: Encounter) => {
        try {
            const response = await fetch(`${API_BASE_URL}/encounter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(encounter),
            });

            if (!response.ok) {
                throw new Error('Encounter failed at apiService');
            }


             // Parse response body as JSON
            return await response.json(); // Return the created encounter object
        } catch (error) {
            console.error('Encounter creation Error at Catch:', error);
            throw new Error('Encounter creation failed as throw in Catch:'); // Throw error for failed registration
        }
    },
    createObservation: async (patientId: number, observation: Observation) => {
        try {
            const response = await fetch(`${API_BASE_URL}/patient/${patientId}/observation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(observation),
            });

            if (!response.ok) {
                throw new Error('Failed to add observation');
            }

            return true; // Indicate successful registration
        } catch (error) {
            console.error('Add Observation Error:', error);
            throw new Error('Failed to add observation'); // Throw error for failed registration
        }
    },
    addObservationToEncounter: async (encounterId: number, observation: Observation) => {
        try {
            const response = await fetch(`${API_BASE_URL}/encounter/${encounterId}/observation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(observation),
            });

            if (!response.ok) {
                throw new Error('Failed to add observation to encounter, response not ok');
            }

            return response.json(); // Return response JSON data if needed
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to add observation to encounter, were caught');
        }
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
    },
    loginUser: async (user: LoginUser) => {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('LogIn failed');
            }

            return true; // Indicate successful registration
        } catch (error) {
            console.error('LogIn Error:', error);
            throw new Error('LogIn failed'); // Throw error for failed registration
        }
    }
    // Lägg till fler funktioner för att skicka data och utföra andra API-anrop
};

export default ApiService;
