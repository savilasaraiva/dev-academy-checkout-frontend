import axios from "axios";

const URL = "https://sgdpps197d.execute-api.us-east-1.amazonaws.com/v1";

const save = creditCards => {
  return axios.post(`${URL}/sales`, creditCards);
};

export default {
  save
};
