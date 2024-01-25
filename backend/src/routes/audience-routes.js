const express = require('express');

const route = express.Router()

const audienceController = require('../controller/audience-controller')
const RouteSecurity = require('../services/route-security-service')

//register audience
route.post('/', audienceController.registerAudience)

//get list of audience
route.get('/', RouteSecurity.autherizeRouteForCreator, audienceController.getAudienceList)

//update audience by Id
route.put('/:audienceId', RouteSecurity.autherizeRouteForAudience, audienceController.updateAudienceById)

//get audience by Id
route.get('/:audienceId', RouteSecurity.autherizeRouteForAudience, audienceController.getAudienceById)

//delete audience by Id
route.delete('/:audienceId', RouteSecurity.autherizeRouteForAudience, audienceController.deleteAudienceById)

module.exports = route