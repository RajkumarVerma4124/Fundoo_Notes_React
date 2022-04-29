import axios from 'axios';

const BASE_URL = 'https://localhost:44348/api/User/';

export const ENDPOINTS = {
    SIGNUP: 'Register',
    SIGNIN: 'Login',
    FORGOT: 'ForgotPassword'
}

export const createAPIEndpoint = async(endpoint, obj) => {
        let url = BASE_URL + endpoint + '/';
        let res = await axios.post(url, obj)
            // console.log(res);
        return res;
    }
    // https://localhost:44348/api/User/Login