import axios from "axios";

export const api = axios.create({
  
  baseURL: "https://essencial-server.vercel.app/", 
});

api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("auth_token");
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error("Erro ao obter token do storage", error);
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Sessão expirada ou não autorizada.");
    }
    return Promise.reject(error);
  }
);