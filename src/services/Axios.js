import axios from "axios";

const REACT_APP_API_BASE =
    "https://attendance-monitoring-app-server.vercel.app/";
const $host = axios.create({
    baseURL: REACT_APP_API_BASE,
});

export { $host };
