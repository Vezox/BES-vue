import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.api || "http://api.besgroup.asia",
});

export default axiosApi;