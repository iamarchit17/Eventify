const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
    street: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    state: {
        type: String, 
        required: true
    },
    postalCode: {
        type: String, 
        required: true
    },
    country: {
        type: String, 
        required: true
    },
}, {timestamps: true})

const creatorDbSchema = new Schema({
    uid: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    contactNo: {
        type: String, 
        required: true
    },
    isActive: {
        type: Boolean, 
        required: true, 
        default: false
    },
    address: addressSchema
}, {timestamps: true})

const creatorDb = mongoose.model('creator', creatorDbSchema)

module.exports = creatorDb