import axiosInstance from "./requestInterceptor";
const BaseURL = 'http://localhost:5000'
async function login(email, password) {
    axiosInstance.post(BaseURL+'/api/login',{})
    
}