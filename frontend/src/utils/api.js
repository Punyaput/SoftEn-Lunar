// utils/api.js
export async function fetchAPI(path, options = {}) {
    const baseURL = 'http://localhost:8000';

    const url = `${baseURL}${path}`;

    try {
        const response = await fetch(url, {
            ...options,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            // Handling the specific Bad Request scenario for time restrictions
            const error = new Error(response.statusText);
            error.status = response.status;

            // If the status code is 400 (Bad Request), check if the error message 
            // is related to the time window
            const data = await response.json();
            console.log(data.message)
            if (data.message && data.message.includes('Moon Points can only be claimed between')) {
                throw new Error(data.message);
            }

            throw error; // Throw other types of errors as usual
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error; // Rethrow the error for further handling in the component
    }
}
