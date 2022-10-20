import axios from "axios";

// const REACT_APP_API_BASE = "http://localhost:7000/"; https://77d7-178-155-4-156.eu.ngrok.io
const REACT_APP_API_BASE = "https://8346-37-145-166-1.eu.ngrok.io/";
const $host = axios.create({
    baseURL: REACT_APP_API_BASE,
});

export { $host };
