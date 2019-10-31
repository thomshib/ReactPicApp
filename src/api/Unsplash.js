import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 708b3f7afca053c25bdfd45fee852655551bf6fc6d29ebd1aa48cd9449f8ef39'
        }


});