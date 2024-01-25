const ApiResponse = require('../utils/api-response')

const CommonService = require('../services/common-services')

function userLogin(req, res, next){
    console.log("Controller received request ", req.body);
    CommonService.userLogin(req.body)
        .then(result=>{
            console.log("userLogin  Common Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getCategories(req, res, next){
    console.log("Controller received request ", req.body);
    CommonService.getCategories(req.body)
        .then(result=>{
            console.log("getCategories  Common Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}

function getCities(req, res, next){
    console.log("Controller received request ", req.body);
    CommonService.getCities(req.body)
        .then(result=>{
            console.log("getCities  Common Controller Result : ",result)
            res.status(result.statusCode)
            res.send(result)
        })
}
module.exports={
    userLogin, getCategories, getCities
}