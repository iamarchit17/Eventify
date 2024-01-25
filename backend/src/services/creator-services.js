const ApiResponse = require('../utils/api-response')
const CreatorDb = require('../database/models/creatorDb');
const UserDb = require('../database/models/userDb');

async function registerCreator(creator){

}

//requires authorisation for same user
async function updateCreatorById(creatorId, payload, user){
    try {
        /*
        //Write Code for authenticating the user
        //Authorisation for same user is required

        if (user.creatorId !== creatorId) {
            return new ApiResponse(401, 'Unauthorized: User Cannot Update This Created.', null, null);
        }

        */
        let creator = await CreatorDb.findOne({creatorId:{$eq: creatorId}})
        if(!creator)
            return new ApiResponse(400, 'Creator Not Registered', null, null)
        payload.creatorId = creatorId
        delete payload._id

        await creatorDb.findOneAndUpdate({_id:creator._id}, payload)
        return new ApiResponse(200, "Creator Updated Successfully.", null, payload)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Updating Creator!.', null, error)
    }
}

//requires authorisation for admin
async function getCreatorList(user){ 
    try {
        /*
            Write code for authorisation
        */
        result = await CreatorDb.find({})
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Creator List!.', null, err.message)
    }
    
    let listData = {count: result.length, data: result} 
    return new ApiResponse(200, "Fetched Creator List", null, listData)
}

//requires authorisation for same creator and admin
async function getCreatorById(creatorID, user){
    try {
        /*
            Write code for any kind of authorisation (if required)
        */
        let creator = await CreatorDb.findOne({creatorId:{$eq: creatorId}})
        if(!creator)
            return new ApiResponse(400, 'Creator Not Found.', null, null)
        
        return new ApiResponse(200, "Creator Fetched Successfully.", null, creator)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While updating Creator!', null, error)
    }
}

async function deleteCreatorById(creatorID){
    try {
        /*
        //Write Code for authenticating the user
        //Authorisation for same creator is required

        if (user.creatorID !== creatorId) {
            return new ApiResponse(401, 'Unauthorized: User Cannot Update This Creator.', null, null);
        }

        */
        let creator = await CreatorDb.findOne({creatorId:{$eq: creatorId}})
        if(!creator)
            return new ApiResponse(400, 'Creator Not Found', null, null)
        
        await CreatorDb.deleteOne({creatorId:{$eq: creatorId}})
        await UserDb.deleteOne({userId:{$eq: creatorId}})
        return new ApiResponse(200, "Creator Deleted Successfully.", null, payload)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Deleting Creator!', null, error)
    }
}

module.exports={
    registerCreator, updateCreatorById, getCreatorList, getCreatorById, deleteCreatorById
}