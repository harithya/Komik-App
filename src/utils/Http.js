import axios from 'axios';

const Http = axios.create({
    baseURL: 'https://mangamint.kaedenoki.net/api/'
})

export default Http;