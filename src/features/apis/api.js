import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cd5027d273a0017e2f45b.mockapi.io/',
});

export default api;