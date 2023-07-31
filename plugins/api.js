import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://api.besgroup.asia",
});

export default axiosApi;