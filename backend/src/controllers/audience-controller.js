
const ApiResponse = require('../utils/api-response')
const AudienceService = require('../services/audience-services')

function getAudienceById(req, res, next){
    console.log("Controller received request ", req.body);
    AudienceService.getAudienceById(req.body)
        .then(result=>{
            console.log("getAudienceById  Admin Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getAudienceList(req, res, next){
    console.log("Controller received request ", req.body);
    AudienceService.getAudienceList(req.body)
        .then(result=>{
            console.log("getAudienceList  Admin Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}


function registerAudience(req, res, next){
    console.log("Controller received request ", req.body);
    AudienceService.registerAudience(req.body)
        .then(result=>{
            console.log("registerAudience  Admin Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function updateAudienceById(req, res, next){
    console.log("Controller received request ", req.body);
    AudienceService.updateAudienceById(req.body)
        .then(result=>{
            console.log("updateAudienceById  Admin Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function deleteAudienceById(req, res, next){
    console.log("Controller received request ", req.body);
    AudienceService.deleteAudienceById(req.body)
        .then(result=>{
            console.log("deleteAudienceById  Admin Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

module.exports={
    registerAudience, updateAudienceById, getAudienceList, getAudienceById, deleteAudienceById
}
