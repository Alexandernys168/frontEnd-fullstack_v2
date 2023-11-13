const API_BASE_URL = 'http://localhost:8080'; // Byt ut med din backend URL

const ApiService = {
    getPatientInfo: () => {
        return fetch(`${API_BASE_URL}/patientinfo`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av data');
                }
                return response.json();
            });
    },
    getMessages: () => {
        return fetch(`${API_BASE_URL}/messages`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel vid hämtning av meddelanden');
                }
                return response.json();
            });
    }
    // Lägg till fler funktioner för att skicka data och utföra andra API-anrop
};

export default ApiService;
