const ApiResponse = require('../utils/api-response')

const Creator = require('../services/creator-services')

function registerCreator(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.registerCreator(req.body)
        .then(result=>{
            console.log("registerCreator  Creator Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function updateCreatorById(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.updateCreatorById(req.body)
        .then(result=>{
            console.log("updateCreatorById  Creator Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getCreatorList(req, res, next){
    console.log("Controller received request ", req.body);
    console.log('request recived',req);
    //id, payload, user
    Creator.getCreatorList(req.body)
        .then(result=>{
            console.log("getCreatorList  Creator Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getCreatorById(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.getCreatorById(req.body)
        .then(result=>{
            console.log("getCreatorById  Creator Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function deleteCreatorById(req, res, next){
    console.log("Controller received request ", req.body);
    Creator.deleteCreatorById(req.body)
        .then(result=>{
            console.log("deleteCreatorById  Creator Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

module.exports ={
    registerCreator, updateCreatorById,getCreatorList ,getCreatorById ,deleteCreatorById
}