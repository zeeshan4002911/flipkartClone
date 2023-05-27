import axios from 'axios';

const URL = process.env.API_KEY || 'http://localhost:3001';

export const authticateSignUp = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (err) {
        console.log('Error while calling signup API', err.message)
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${URL}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}