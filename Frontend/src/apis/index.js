import axiosInstance from "./requestInterceptor";
const BaseURL = 'http://localhost:5000'

async function loginAPI(email, password) {
    const response  = await axiosInstance.post(BaseURL+'/api/common/login',{email,password});
    return response
}
async function categoriesAPI() {
    const response  = await axiosInstance.get(BaseURL+'/api/common/categories');
    // console.log("The response of categories is  " ,response.data.data)
    return response.data.data
}
async function citiesAPI() {
    const response  = await axiosInstance.get(BaseURL+'/api/common/cities');
    // console.log("The response of cities is " ,response.data.data)
    return response.data.data
}

//To Do : what to send as parameters , the db model ? If yes then how 
//the function would be getting input and just return the response.
async function registerAudienceAPI(audience) {
    const response  = await axiosInstance.post(BaseURL+'/api/audience',audience);
    // console.log("The response of cities is " ,response.data.data)
    return response
}

// async function 

export {
    loginAPI ,categoriesAPI , citiesAPI ,registerAudienceAPI
}

