const ApiResponse = require('../utils/api-response')
const JwtService = require('../services/jwt-service')
const CommonService = require('../services/common-services')

function userLogin(req, res, next){
    console.log("Controller received request ", req.body);
    CommonService.userLogin(req.body)
        .then(result=>{
            console.log("userLogin  Common Controller Result : ",result)
            if(result.statusCode === 200){
                JwtService.generateJwt(result.data)
                    .then(token=>{
                        res.setHeader('Access-Control-Expose-Headers','authtoken')
                        res.setHeader('authtoken', 'Bearer '+ token)
                        res.status(result.statusCode)
                        res.send(result)
                    })
                    .catch(err=>{
                        result = new ApiResponse(500, 'Error in generating access token!', null, null)
                        res.status(result.statusCode)
                        res.send(result)
                    })
            }else{
                res.status(result.statusCode)
                res.send(result)
            }
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