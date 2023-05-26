import axios from 'axios';

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
