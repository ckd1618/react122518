import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 58794010c565cd74ad10efd7bd8f4d3742087cf24ad2cb68e5be246a302e10d7'
    }
});