const ApiResponse = require('../utils/api-response')
const AudienceDb = require('../database/models/audienceDb');
const UserDb = require('../database/models/userDb');

async function registerAudience(){
    /* Write Code */
}

//requires authorisation for same user
async function updateAudienceById(audienceId, payload, user){
    
    try {
        /*
        //Write Code for authenticating the user
        //Authorisation for same audience is required

        if (user.audienceID !== audienceId) {
            return new ApiResponse(401, 'Unauthorized: User Cannot Update This Audience.', null, null);
        }

        */
        let audience = await AudienceDb.findOne({audienceId:{$eq: audienceId}})
        if(!audience)
            return new ApiResponse(400, 'Audience Not Registered', null, null)
        payload.audienceId = audienceId
        delete payload._id

        await AudienceDb.findOneAndUpdate({_id:audience._id}, payload)
        return new ApiResponse(200, "Audience Updated Successfully.", null, payload)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Updating Audience!.', null, error)
    }
}

//requires admin authorisation
async function getAudienceList(user){
    /*
        Write code for authorisation
    */
    try {
        result = await AttendantDb.find({})
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Audience List!.', null, err.message)
    }
    //TODO : update result for paggination link 
    let listData = {count: result.length, data: result} 
    return new ApiResponse(200, "Fetched Attendant list", null, listData)
}

// ask if any authorisation is required.
async function getAudienceById(audienceID /*, user*/ ){
    try {

        /*
            Write code for any kind of authorisation (if required)
        */
        let audience = await AudienceDb.findOne({audienceId:{$eq: audienceId}})
        if(!audience)
            return new ApiResponse(400, 'Audience Not Found.', null, null)
        
        return new ApiResponse(200, "Audience fetched Successfully.", null, audience)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While updating Audience !.', null, error)
    }
}

//requires same user authrisation
async function deleteAudienceById(audienceID, user){
    try {
        /*
        //Write Code for authenticating the user
        //Authorisation for same audience is required

        if (user.audienceID !== audienceId) {
            return new ApiResponse(401, 'Unauthorized: User Cannot Update This Audience.', null, null);
        }

        */
        let audience = await AudienceDb.findOne({audienceId:{$eq: audienceId}})
        if(!audience)
            return new ApiResponse(400, 'Audience Not Found', null, null)
        
        await AudienceDb.deleteOne({audienceId:{$eq: audienceId}})
        await UserDb.deleteOne({userId:{$eq: audienceId}})
        return new ApiResponse(200, "Audience Deleted Successfully.", null, payload)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Deleting Audience!.', null, error)
    }
}

module.exports={
    registerAudience, updateAudienceById, getAudienceList, getAudienceById, deleteAudienceById
}