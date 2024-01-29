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
        
        if(user.statusCode == 400) {
            return user;
        }
        
        //console.log("print statetment 1" + user);

        payload.myBookings = []
        payload.uid = user._id
        //console.log('payload' + payload)
        const audience = new AudienceDb(payload)
        //console.log("print statetment 2" + audience);
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
        let audience = await AudienceDb.findOne({_id:{$eq: audienceId}})
        
        if(!audience)
            return new ApiResponse(400, 'Audience Not Registered', null, null)

        if(audience._id != user._id){
            return new ApiResponse(401, 'Unauthorised: You cannot access other audience details', null, null)
        }

        payload.audienceId = audienceId
        delete payload._id
        delete payload.email
        console.log(payload)

        await AudienceDb.findOneAndUpdate({_id:audienceId}, payload)
        return new ApiResponse(200, "Audience Updated Successfully.", null, payload)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Updating Audience!.', null, error)
    }
}

//requires admin authorisation
async function getAudienceList(user){
    try {
        result = await AudienceDb.find({})
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Audience List!.', null, err.message)
    }
    
    let listData = {count: result.length, data: result} 
    return new ApiResponse(200, "Fetched Audience List", null, listData)
}

// ask if any authorisation is required.
async function getAudienceById(audienceId, user){
    try {

        let audience = await AudienceDb.findOne({_id:{$eq: audienceId}})

        if(!audience)
            return new ApiResponse(400, 'Audience Not Found.', null, null)

        
        if(audience._id != user._id){
            return new ApiResponse(401, 'Unauthorised: You cannot access other audience details', null, null)
        }
        
        return new ApiResponse(200, "Audience fetched Successfully.", null, audience)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While updating Audience!', null, error)
    }
}

//requires same user authorisation
async function deleteAudienceById(audienceId, user){
    try {
        
        let audience = await AudienceDb.findOne({_id:{$eq: audienceId}})
        if(!audience)
            return new ApiResponse(400, 'Audience Not Found', null, null)
        
        if(audience._id != user._id){
            return new ApiResponse(401, 'Unauthorised: You cannot delete other audience details', null, null)
        }   

        await AudienceDb.deleteOne({_id:{$eq: audienceId}})
        await UserDb.deleteOne({_id:{$eq: audience.uid}})
        return new ApiResponse(200, "Audience Deleted Successfully.", null, null)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Deleting Audience!', null, error)
    }
}

module.exports={
    registerAudience, updateAudienceById, getAudienceList, getAudienceById, deleteAudienceById, createUser
}