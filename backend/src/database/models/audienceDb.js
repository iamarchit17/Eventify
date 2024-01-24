const mongoose = require('mongoose')
const Schema = mongoose.Schema

const audienceDbSchema = new Schema({
    profilePhoto: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    DOB: {
        type: String, 
        required: false
    },
    gender: {
        type: String, 
        required: false
    },
    myBookings: {
        type: Array,
        required: false,
        default: undefined
    }
}, {timestamps: true})

const audiencedB = mongoose.model('audience', audienceDbSchema)

module.exports = audiencedB