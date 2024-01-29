const express = require('express');

const route = express.Router()

const eventController = require('../controllers/event-controller')
const RouteSecurity = require('../services/route-security-service')

//register event
route.post('/', RouteSecurity.autherizeRouteForCreator, eventController.registerEvent)
// route.post('/',  eventController.registerEvent)

//get list of event
route.get('/', eventController.getEventList)

//update event by Id
route.put('/:eventId', RouteSecurity.autherizeRouteForCreator, eventController.updateEventById)

//get event by Id
route.get('/:eventId', eventController.getEventById)

//delete event by Id
route.delete('/:eventId', RouteSecurity.autherizeRouteForCreator, eventController.deleteEventById)

module.exports = route