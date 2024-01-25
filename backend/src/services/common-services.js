const ApiResponse = require('../utils/api-response')
const EventDb = require('../database/models/eventDb');
const Categories = require('../constants/categories');
const Cities = require('../constants/cities');

async function userLogin(loginDetails){
    /*
        Write Code
    */
}

async function getCategories(){
    try {
        result = Categories
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Categories', null, err.message)
    }

    return new ApiResponse(200, "Fetched Categories List", null, result)
}

async function getCities(){
    try {
        result = Cities
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Cities', null, err.message)
    }

    return new ApiResponse(200, "Fetched Cities List", null, result)
}

module.exports={
    userLogin, getCategories, getCities
}