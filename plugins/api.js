import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.API || "https://api.besgroup.asia",
});

export default axiosApi;