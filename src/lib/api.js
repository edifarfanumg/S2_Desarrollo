// lib/api.js
import axios from 'axios';

export async function getTipoCambio() {
    const response = await axios.get('http://localhost:8080');
    return response.data;
}
