import axios from "axios";

const axiosService = axios.create({baseURL: "https://w0rstr.github.io/json-api/db.json"})

export default axiosService