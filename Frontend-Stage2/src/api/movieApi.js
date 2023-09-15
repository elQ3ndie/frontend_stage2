import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        'api_key': '032e958aaeea824bba5fd5f0ceba68f3'
    }
})