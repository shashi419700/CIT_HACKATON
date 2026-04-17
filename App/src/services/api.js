import axios from "axios";

const API = axios.create({
  baseURL: "https://cit-hackaton-1.onrender.com/api",
});
export default API;