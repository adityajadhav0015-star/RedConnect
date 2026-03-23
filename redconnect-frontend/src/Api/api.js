import axios from "axios";

const API = axios.create({
  baseURL: "https://redconnect-backend.onrender.com",
});

export default API;
