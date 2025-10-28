import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmZiZmU2OTVkMzZlMDliMzg2ZDExMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc2MTU5MTI5NiwiZXhwIjoxNzYxODUwNDk2fQ.7k1gbeyzly7rO-lLOMhEbivG1PWpMdXdVAc2FAkGqs4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});