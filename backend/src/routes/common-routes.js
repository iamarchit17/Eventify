const express = require('express');

const route = express.Router()

const commonContorller = require('../controllers/common-controller')
const RouteSecurity = require('../services/route-security-service')

//login user
route.post('/login', commonContorller.userLogin)

//get categories
route.get('/categories', commonContorller.getCategories)

//get cities
route.get('/cities', commonContorller.getCities)

module.exports = route