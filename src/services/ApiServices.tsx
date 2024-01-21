
import {Encounter, LoginUser, Msg, Observation, User, ImageCreation} from "../interface/interface";


const API_MSG_URL = 'https://msg-service-deployment.app.cloud.cbh.kth.se';
const API_USER_URL = 'https://user-service-deployment.app.cloud.cbh.kth.se';
const API_JOURNAL_URL = 'https://journal-service-deployment.app.cloud.cbh.kth.se';
const API_IMAGE_URL = 'https://image-service-deployment.app.cloud.cbh.kth.se';


const ApiService = {
    getPatients: () => {
        return fetch(`${API_USER_URL}/patients`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getPatientById: (id: number) => {
        return fetch(`${API_USER_URL}/patient/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getPatientByEmail: (email: string) => {
        return fetch(`${API_USER_URL}/patient/email/${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getPatientByUserId: (userId: number) => {
        return fetch(`${API_USER_URL}/patient/userId/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getDoctorByEmail: (email: string) => {
        return fetch(`${API_USER_URL}/doctors/email/${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getOthersByEmail: (email: string) => {
        return fetch(`${API_USER_URL}/others/email/${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },

    getUserIdByPatientId: (id: number) => {
        return fetch(`${API_USER_URL}/patient/${id}/userId`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getConversationBySenderAndReceiver: (sender: number, receiver: number) => {
        return fetch(`${API_MSG_URL}/msgs/conversation/${sender}/${receiver}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getMessages: () => {
        return fetch(`${API_MSG_URL}/msgs`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av meddelanden');
                }
                return response.json();
            });
    },
    getAllMessagesForUser: (userId: number) => {
        return fetch(`${API_MSG_URL}/msgs/user/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av meddelanden');
                }
                return response.json();
            });
    },
    getConversationById: (otherUserId: number) => {
        return fetch(`${API_MSG_URL}/msgs/conversation/${otherUserId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av meddelanden');
                }
                return response.json();
            });
    },
    getDoctorInfo: () => {
        return fetch(`${API_USER_URL}/doctors`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getDoctorById: (id: number) => {
        return fetch(`${API_USER_URL}/doctors/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getEncounterByPatientId: (patientId: number) => {
        return fetch(`${API_JOURNAL_URL}/encounter/patient/${patientId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getOthers: () => {
        return fetch(`${API_USER_URL}/others`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getOthersById: (id: number) => {
        return fetch(`${API_USER_URL}/others/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getUsers: () => {
        return fetch(`${API_USER_URL}/users`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getAllEncountersByUserId: (userId: number) => {
        return fetch(`${API_JOURNAL_URL}/encounter/patient/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getAllEncounterIdsByUserId: (userId: number) => {
        return fetch(`${API_JOURNAL_URL}/encounter/patient/encounterId/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getObservationByEncounterId: (encounterId: number) => {
        return fetch(`${API_JOURNAL_URL}/observations/encounter/${encounterId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getImageById: (imageId: number) => {
        return fetch(`${API_IMAGE_URL}/images/${imageId}/data`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },

    getAllImages: () => {
        return fetch(`${API_IMAGE_URL}/images/list`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    createEncounter: async (encounter: Encounter) => {
        try {
            const response = await fetch(`${API_JOURNAL_URL}/encounter`, {
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
            const response = await fetch(`${API_JOURNAL_URL}/patient/${patientId}/observation`, {
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
            const response = await fetch(`${API_JOURNAL_URL}/encounter/${encounterId}/observation`, {
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
            const response = await fetch(`${API_USER_URL}/register`, {
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
            const response = await fetch(`${API_USER_URL}/login`, {
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
    },
    createMessage: async (message: Msg) => {
        try {
            const response = await fetch(`${API_MSG_URL}/msg`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });

            if (!response.ok) {
                throw new Error('Creating message failed');
            }

            return true; // Indicate successful registration
        } catch (error) {
            console.error('Message Error:', error);
            throw new Error('Message failed'); // Throw error for failed registration
        }
    },

    createImage: async (image: ImageCreation) => {
        try {
            const response = await fetch(`${API_IMAGE_URL}/image`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(image),
            });
            if (!response.ok) {
                throw  new Error(`Creating Image failed`);
            }
            return true;
        } catch (error) {
            console.error('Message Error:', error);
            throw new Error('Image failed');
        }
    },
    updateImageById: async (imageId: number, updatedDetails: ImageCreation) => {
        try {
            // Make a PUT request to update the image details
            const response = await fetch(`${API_IMAGE_URL}/images/${imageId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDetails),
            });

            if (!response.ok) {
                throw new Error('Failed to update image details');
            }

            // Return the updated image details
            return response.json();
        } catch (error) {
            console.error('Error updating image details:', error);
            throw error; // Rethrow the error to handle it in the component
        }
    },
    // Lägg till fler funktioner för att skicka data och utföra andra API-anrop
};

export default ApiService;
