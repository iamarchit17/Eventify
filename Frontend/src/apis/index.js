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


//creator
async function registerCreatorAPI(creator) {
    const response  = await axiosInstance.post(BaseURL+'/api/creator',creator);
    console.log("The response of register creator API" ,response)
    return response
}

async function getCreatorByIdAPI(creatorID){
    const response  = await axiosInstance.get(BaseURL+'/api/creator/' + creatorID);
    console.log("The response of get creator by Id API" ,response)
    return response
}

async function getCreatorListAPI(){
    const response  = await axiosInstance.get(BaseURL+'/api/creator/');
    console.log("The response of get list creator API" ,response)
    return response
}

async function updateCreatorByIdAPI(creatorID){
    const response  = await axiosInstance.put(BaseURL+'/api/audience/'+ audienceID);
    console.log("The response of get list creator API" ,response)
    return response
}

async function deleteCreatorByIdAPI(creatorID){
    const response  = await axiosInstance.delete(BaseURL+'/api/audience/'+ creatorID);
    console.log("The response of delete creator by id  API" ,response)
    return response
}

//events

async function registerEventAPI(event) {
    const response  = await axiosInstance.post(BaseURL+'/api/event',event);
    console.log("The response of register Event API" ,response)
    return response
}

async function getEventListAPI() {
    const response  = await axiosInstance.get(BaseURL+'/api/event/');
    console.log("The response of getEventListAPI" ,response)
    return response
} 

async function updateEventByIdAPI(eventID){
    const response  = await axiosInstance.put(BaseURL+'/api/event/'+ eventID);
    console.log("The response of get list event API" ,response)
    return response
}

async function getEventById(eventID){
    const response  = await axiosInstance.get(BaseURL+'/api/event/' + eventID);
    console.log("The response of get event by Id API" ,response)
    return response
}

async function deleteEventByIdAPI(eventID){
    const response  = await axiosInstance.delete(BaseURL+'/api/event/'+ eventID);
    console.log("The response of delete event by id  API" ,response)
    return response
}






export {
    loginAPI ,categoriesAPI , citiesAPI ,registerAudienceAPI,getAudienceByIdAPI , getAudienceListAPI , updateAudienceByIdAPI ,deleteAudienceByIdAPI,
    registerCreatorAPI ,getCreatorByIdAPI ,getCreatorListAPI ,updateCreatorByIdAPI,deleteCreatorByIdAPI ,registerEventAPI , getEventListAPI , updateEventByIdAPI , getEventById ,deleteEventByIdAPI
}

