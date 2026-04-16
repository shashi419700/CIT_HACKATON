import axios from "axios";

const API = axios.create({
  baseURL: "https://arka-jain-hacks.onrender.com/api",
});
export default API;