const ApiResponse = require('../utils/api-response')
const AudienceDb = require('../database/models/audienceDb');
const UserDb = require('../database/models/userDb');
const UserRole = require('../constants/role-constant')


async function createUser(email, password, role){
    let user = await UserDb.findOne({email: email})
    if(user){
        return new ApiResponse(400, 'User Is Already Registered With Provided User Email', null, null)
    }
    const userDb = new UserDb({
        email : email,
        password : password,
        role: role
    })
    console.log(userDb);
    const res = await userDb.save();
    return res;
}


async function registerAudience(payload){

    try{
        console.log(payload.email, payload.password)
        console.log(payload)
        user = await createUser(payload.email, payload.password,UserRole.AUDIENCE)
        console.log(user);

        payload.myBookings = []
        payload.uid = user._id
        //console.log('payload' + payload)
        const audience = new AudienceDb(payload)
        console.log(audience);
        const res = await audience.save();
        console.log('res',res);
        return new ApiResponse(201, 'Audience Registered', null, res)
    } catch(error){
        return new ApiResponse(500, 'Exception While Creating Audience!.', null, error)
    }
}

//requires authorisation for same user
async function updateAudienceById(audienceId, payload, user){
    
    try {
        /*
        //Write Code for authenticating the user
        //Authorisation for same audience is required

        if (user.audienceId !== audienceId) {
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
    try {
        /*
            Write code for authorisation
        */
        result = await AttendantDb.find({})
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Audience List!.', null, err.message)
    }
    
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
        return new ApiResponse(500, 'Exception While updating Audience!', null, error)
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
        return new ApiResponse(500, 'Exception While Deleting Audience!', null, error)
    }
}

module.exports={
    registerAudience, updateAudienceById, getAudienceList, getAudienceById, deleteAudienceById, createUser
}