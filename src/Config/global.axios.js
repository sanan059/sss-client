import axios from "axios";

const AppInstance = axios.create({
  baseURL: process.env.REACT_APP_API
});

AppInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

AppInstance.interceptors.response.use((response) => {
  return response;
})

export default AppInstance;