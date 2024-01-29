const ApiResponse = require ('../utils/api-response')
const EventService = require('../services/event-services')

function registerEvent(req, res, next){
    console.log("Controller received request ", req.body);
    EventService.registerEvent(req.body,null)
        .then(result=>{
            console.log("registerEvent Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}
function updateEventById(req, res, next){
    console.log("Controller received request ", req.body);
    EventService.updateEventById(req.body)
        .then(result=>{
            console.log("updateEventById Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getEventList(req, res, next){
    console.log("Controller received request ", req.body);
    EventService.getEventList(req.body)
        .then(result=>{
            console.log("getEventList Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getEventById(req, res, next){
    console.log("Controller received request ", req.body);
    EventService.getEventById(req.body)
        .then(result=>{
            console.log("getEventById Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function deleteEventById(req, res, next){
    console.log("Controller received request ", req.body);
    EventService.deleteEventById(req.body)
        .then(result=>{
            console.log("deleteEventById Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}


module.exports={
    registerEvent, updateEventById, getEventList, getEventById, deleteEventById
}