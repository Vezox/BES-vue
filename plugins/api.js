import axios from "axios";

const axiosApi = axios.create({
  baseURL:"https://api.besgroup.asia/api",
  // baseURL: "http://localhost:3100/api",
});

export default axiosApi;