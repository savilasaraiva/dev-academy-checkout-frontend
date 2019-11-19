import axios from 'axios'
const URL = 'https://sgdpps197d.execute-api.us-east-1.amazonaws.com/v1'

const getAll = () => {
    return axios.get(`${URL}/produtos-mock`)
}

export default {
    getAll
}