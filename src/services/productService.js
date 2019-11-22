import axios from "axios";

const URL = "https://sgdpps197d.execute-api.us-east-1.amazonaws.com/v1/unauth";

const getAll = () => {
  return axios.get(`${URL}/products/mock`);
};

export default {
  getAll
};
