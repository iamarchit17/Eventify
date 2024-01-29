const ApiResponse = require('../utils/api-response')
const UserDb = require('../database/models/userDb');
const AudienceDb = require('../database/models/audienceDb');
const CreatorDb = require('../database/models/creatorDb');
const Categories = require('../constants/categories');
const Cities = require('../constants/cities');
const UserRole = require('../constants/role-constant');

async function userLogin(loginDetails){
    console.log("User login service : ", loginDetails)
    try {
        userDb = await UserDb.findOne({email:loginDetails.email})
        
        if(!userDb){
            return new ApiResponse(404, 'User Not registered! Please Signup First', null, null)
        
        } else {
            console.log(loginDetails.password, userDb.password)
            if(loginDetails.password != userDb.password){
                return new ApiResponse(403, 'Invalid Credentials', null, null) 
            }
            
            await userDb.save()
            var userLoginResponse = {}
            switch (userDb.role) {
                case UserRole.AUDIENCE:
                    let audience = await AudienceDb.findOne({email:{$eq: userDb.email}})
                    
                    userLoginResponse.uid = audience.uid
                    userLoginResponse._id = audience._id
                    userLoginResponse.profilePhoto = audience.profilePhoto
                    userLoginResponse.name = audience.name
                    userLoginResponse.contactNo = audience.contactNo
                    userLoginResponse.email = audience.email
                    userLoginResponse.DOB = audience.DOB
                    userLoginResponse.gender = audience.gender
                    userLoginResponse.myBookings = audience.myBookings
                    userLoginResponse.role = UserRole.AUDIENCE    
                    
                    console.log(JSON.stringify(userLoginResponse))
                    break;
                case UserRole.CREATOR:
                    let creator = await CreatorDb.findOne({email:{$eq: userDb.email}})
                    userLoginResponse.uid = creator.uid
                    userLoginResponse.name = creator.name
                    userLoginResponse.email = creator.email
                    userLoginResponse.contactNo = creator.contactNo
                    userLoginResponse.isActive = creator.isActive
                    userLoginResponse.address = creator.address
                    userLoginResponse._id = creator._id
                    userLoginResponse.role = UserRole.CREATOR  
                    console.log("check " + userLoginResponse)              
                    break;              
                default:
                    /*
                    password": "admin",
                    "email": "admin@eventify.com",
                    "role": "ADMIN"
                    */
                    userLoginResponse.email = userDb.email
                    userLoginResponse.role = UserRole.ADMIN
                    break;
            }
            return new ApiResponse(200, `User logged in successfully.`, null, userLoginResponse)

              
        }    
    } catch (error) {
        return new ApiResponse(500, 'Exception While Login.', null, error.message)
    }
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