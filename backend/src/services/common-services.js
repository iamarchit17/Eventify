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
                await userDb.save()
                var userLoginResponse = {}
                switch (userDb.role) {
                    case UserRole.AUDIENCE:
                        //let AudienceDb =await AudienceDb.findOneAndUpdate({audienceId: userDb.userId}, {new : true})
                        //console.log(attendantDb)
                        let audience = await AudienceDb.findOne({email:{$eq: userDb.email}})
                        userLoginResponse = audience                     
                        break;
                    case UserRole.CREATOR:
                        let creator = await CreatorDb.findOne({email:{$eq: userDb.email}})
                        userLoginResponse = creator                  
                        break;              
                    default:
                        let admin = userDb
                        userLoginResponse = admin 
                        break;
                }
                return new ApiResponse(200, `User logged in successfully.`, null, userLoginResponse)

            //}    
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