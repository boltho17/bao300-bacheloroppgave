import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.bring.com/shippingguide',
    headers: {
        "X-MyBring-API-Uid": 'thomas_bjerke@hotmail.com',
        "X-MyBring-API-Key": 'cd3f3bad-f631-49e0-8fac-46020f8ba18f',
        "X-Bring-Client-URL": 'www.knowitall.io',
        Accept: 'application/json',
    }
});





