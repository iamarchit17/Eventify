const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
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
  capcity: {
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
  },
}, {timestamps: true});

const event = mongoose.model('event', eventSchema);

module.exports = event;
