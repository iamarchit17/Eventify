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

async function registerAudienceAPI(audience) {
    const response  = await axiosInstance.post(BaseURL+'/api/audience',audience);
    console.log("The response of audience API" ,response)
    return response
}

async function getAudienceByIdAPI(audienceID){
    const response  = await axiosInstance.get(BaseURL+'/api/audience/' + audienceID);
    console.log("The response of get audience API" ,response)
    return response
}

async function getAudienceListAPI(){
    const response  = await axiosInstance.get(BaseURL+'/api/audience/');
    console.log("The response of get list audience API" ,response)
    return response
}

async function updateAudienceByIdAPI(audienceID){
    const response  = await axiosInstance.put(BaseURL+'/api/audience/'+ audienceID);
    console.log("The response of get list audience API" ,response)
    return response
}

async function deleteAudienceByIdAPI(audienceID){
    const response  = await axiosInstance.delete(BaseURL+'/api/audience/'+ audienceID);
    console.log("The response of delete audience by id  API" ,response)
    return response
}




export {
    loginAPI ,categoriesAPI , citiesAPI ,registerAudienceAPI,getAudienceByIdAPI , getAudienceListAPI , updateAudienceByIdAPI ,deleteAudienceByIdAPI
}

