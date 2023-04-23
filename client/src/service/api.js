import axios from 'axios';

const URL = process.env.API_KEY || 'http://localhost:3001';

export const authticateSignUp = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (err) {
        console.log('Error while calling API', err.message)
    }
}