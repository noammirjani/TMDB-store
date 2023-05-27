import axios from 'axios';


/**
 * Fetch Request
 *
 * A utility function for making HTTP requests using Axios.
 *
 * @param {string} method - The HTTP method (GET, POST, DELETE).
 * @param {Object} httpRequest - The HTTP request object containing the URL and data.
 * @returns {Promise} The response data or an empty array if an error occurs.
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
        console.log(error.message, error.code);
        return [];
    }
};
