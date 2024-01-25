// For future use

// const ApiResponse = require('../utils/api-response')
// const CreatorService = require('../services/creator-services')
// const EventService = require('../services/event-services')
// const AudienceService = require('../services/audience-services')


// //
// function getCreatorById(req, res, next){
//     console.log("Controller received request ", req.body);
//     CreatorService.getCreatorById(req.body)
//         .then(result=>{
//             console.log("getCreatorById  Admin Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function updateCreatorById(req, res, next){
//     console.log("Controller received request ", req.body);
//     CreatorService.updateCreatorById(req.body)
//         .then(result=>{
//             console.log("updateCreator  Admin Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function getCreatorList(req, res, next){
//     console.log("Controller received request ", req.body);
//     CreatorService.getCreatorList(req.body)
//         .then(result=>{
//             console.log("getCreatorList  Admin Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function updateEventById(req, res, next){
//     console.log("Controller received request ", req.body);
//     EventService.updateEventById(req.body)
//         .then(result=>{
//             console.log("updateEventById  Admin Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function getAudienceById(req, res, next){
//     console.log("Controller received request ", req.body);
//     AudienceService.getAudienceById(req.body)
//         .then(result=>{
//             console.log("getAudienceById  Admin Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }

// function getAudienceList(req, res, next){
//     console.log("Controller received request ", req.body);
//     AudienceService.getAudienceList(req.body)
//         .then(result=>{
//             console.log("getAudienceList  Admin Controller Result : ",result)
//             res.status(result.statusCode)
//             res.send(result)
//         })
// }