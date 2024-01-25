const ApiResponse = require ('../utils/api-response')
const EventService = require('../services/event-services')

function registerEvent(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.registerEvent(req.body)
        .then(result=>{
            console.log("registerEvent Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}
function updateEventById(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.updateEventById(req.body)
        .then(result=>{
            console.log("updateEventById Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getEventList(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.getEventList(req.body)
        .then(result=>{
            console.log("getEventList Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getEventById(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.getEventById(req.body)
        .then(result=>{
            console.log("getEventById Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function deleteEventById(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.deleteEventById(req.body)
        .then(result=>{
            console.log("deleteEventById Event Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}


module.exports={
    registerEvent, updateEventById, getEventList, getEventById, deleteEventById
}