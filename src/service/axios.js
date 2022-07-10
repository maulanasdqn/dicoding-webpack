import axios from "axios";

const initAxios = (baseUrl) => {
  axios.defaults.baseURL = baseUrl;
};

export default initAxios;
