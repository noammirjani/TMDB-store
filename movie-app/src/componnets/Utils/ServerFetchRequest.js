import axios from 'axios';

/**
 * Performs an HTTP request using Axios.
 *
 * @param {string} method - The HTTP method (GET, POST, DELETE).
 * @param {object} httpRequest - The HTTP request object containing the URL and data.
 * @returns {Promise} A promise that resolves with the response data or rejects with an error.
 * @throws {Error} If the API request fails.
 */
export const fetchRequest = async (method, httpRequest) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        if (method === 'GET') {
            const response = await axios.get(httpRequest.url, { headers });
            return response.data;
        } else if (method === 'POST') {
            await axios.post(httpRequest.url, httpRequest.data, { headers });
        } else if (method === 'DELETE') {
            await axios.delete(httpRequest.url, { headers, data: httpRequest.data });
        }
    } catch (error) {
        throw new Error(`Failed API request: \n${error.message} ${error.code}`);
    }
};