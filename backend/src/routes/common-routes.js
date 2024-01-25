const express = require('express');

const route = express.Router()

const commonContorller = require('../controllers/common-controller')
const RouteSecurity = require('../services/route-security-service')

//login user
route.post('/', commonContorller.userLogin)

//get categories
route.get('/', commonContorller.getCategories)

//get cities
route.get('/', commonContorller.getCities)

module.exports = route