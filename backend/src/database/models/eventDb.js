const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    cid :{
        type: String,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    participants: {
        type: Array,
        required: true
    },
    charges: {
        type: Number,
        required: true,
    },
    tnc: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const eventDb = mongoose.model('event', eventSchema);

module.exports = eventDb;