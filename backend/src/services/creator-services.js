const ApiResponse = require('../utils/api-response')
const CreatorDb = require('../database/models/creatorDb');
const UserDb = require('../database/models/userDb');
const AudienceService = require('./audience-services')
const UserRole = require('../constants/role-constant')

async function registerCreator(payload){
    try{
        console.log(payload.email, payload.password)
        console.log(payload)
        user = await AudienceService.createUser(payload.email, payload.password,UserRole.CREATOR)

        if(user.statusCode == 400){
            console.log("user al", user)
            return user
        }
        console.log(user);

        payload.isActive = false
        payload.uid = user._id

        const creator = new CreatorDb(payload)
        console.log(creator);
        const res = await creator.save();
        console.log('res',res);
        return new ApiResponse(201, 'Creator Registered', null, res)
    } catch(error){
        return new ApiResponse(500, 'Exception While Creating Creator!.', null, error)
    }
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
        let creator = await CreatorDb.findOne({_id:{$eq: creatorId}})
        if(!creator)
            return new ApiResponse(400, 'Creator Not Registered', null, null)
        payload.creatorId = creatorId
        delete payload._id
        delete payload.email
        console.log("PAYLOAD", payload);
        

        await CreatorDb.findOneAndUpdate({_id:creatorId}, payload)
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
async function getCreatorById(creatorId, user){
    try {
        /*
            Write code for any kind of authorisation (if required)
        */
        let creator = await CreatorDb.findOne({_id:{$eq: creatorId}})
        console.log("Creator 1000" + creator)
        if(!creator)
            return new ApiResponse(400, 'Creator Not Found.', null, null)
        
        return new ApiResponse(200, "Creator Fetched Successfully.", null, creator)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Creator!', null, error)
    }
}

async function deleteCreatorById(creatorId, user){
    try {
        /*
        //Write Code for authenticating the user
        //Authorisation for same creator is required

        if (user.creatorID !== creatorId) {
            return new ApiResponse(401, 'Unauthorized: User Cannot Update This Creator.', null, null);
        }

        */
        let creator = await CreatorDb.findOne({_id:{$eq: creatorId}})
        
        if(!creator)
            return new ApiResponse(400, 'Creator Not Found', null, null)
        
        await CreatorDb.deleteOne({_id:{$eq: creatorId}})
        await UserDb.deleteOne({_id:{$eq: creator.uid}})
        return new ApiResponse(200, "Creator Deleted Successfully.", null, null)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Deleting Creator!', null, error)
    }
}

module.exports={
    registerCreator, updateCreatorById, getCreatorList, getCreatorById, deleteCreatorById
}