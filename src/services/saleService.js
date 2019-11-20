import axios from 'axios'
const URL = 'https://sgdpps197d.execute-api.us-east-1.amazonaws.com/v1/unauth'

const save = () => {
    return axios.post(`${URL}/sales`)
}

export default {
    save
}