const ApiResponse = require('../utils/api-response')
const EventDb = require('../database/models/eventDb')

//requires authorisation for creator
async function registerEvent(payload, user){

    try{
        console.log("The payload is ", payload)
        const event = new EventDb({
            name : payload.name,
            category: payload.category,
            coverImage: payload.coverImage,
            date: payload.date,
            duration: payload.duration,
            venue: payload.venue,
            description: payload.description,
            capacity: payload.capacity,
            participants: [],
            charges: payload.charges,
            tnc: payload.tnc,
            cid : user._id,
            cname : user.name
        })
        console.log( "The event information is :" ,event);
        const res = await event.save();
        console.log("Saved the event.")
        console.log('res is ',res)
        return new ApiResponse(201, 'Event Registered', null, res)
    }
    catch (error){
        return new ApiResponse(500, 'Exception While Creating Event!.', null, error)
    }
}

//requires authorisation for event creator
async function updateEventById(eventId, payload, user){
    try {
        let event= await EventDb.findOne({_id:{$eq: eventId}})
        if(!event)
            return new ApiResponse(400, 'Event Not Registered', null, null)

        if(event.cid != user._id){
            return new ApiResponse(401, 'Unauthorised: You cannot update this event!', null, null);
        }

        payload.eventId = eventId
        delete payload._id

        await EventDb.findOneAndUpdate({_id:event._id}, payload)
        return new ApiResponse(200, "Event Updated Successfully.", null, payload)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Updating Event!.', null, error)
    }
}

async function getEventList(){ 
    try {
        result = await EventDb.find({})
        let listData = {count: result.length, data: result} 
        return new ApiResponse(200, "Fetched Events list", null, listData)
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Event List!.', null, err.message)
    }
    
    
}

async function getEventById(eventId) {
    try {
        let event = await EventDb.findOne({_id:{$eq: eventId}})
        if(!event)
            return new ApiResponse(400, 'Event Not Found.', null, null)
        
        return new ApiResponse(200, "Event fetched Successfully.", null, event)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Fetching Event!', null, error)
    }
    
}
//requires auth for event creator
async function deleteEventById(eventId, user){
    try {
        let event = await EventDb.findOne({eventId:{$eq: eventId}})
        if(!event)
            return new ApiResponse(400, 'Event Not Found', null, null)

        if(event.cid != user._id){
           return new ApiResponse(401, 'Unauthorised: You cannot delete this event!', null, null);
        }
        
        await EventDb.deleteOne({_id:{$eq: eventId}})
        return new ApiResponse(200, "Event Deleted Successfully.", null, null)  
    } catch (error) {
        return new ApiResponse(500, 'Exception While Deleting Event!', null, error)
    }
}

module.exports={
    registerEvent, updateEventById, getEventList, getEventById, deleteEventById
}