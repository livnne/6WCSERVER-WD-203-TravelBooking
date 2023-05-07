const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let travelSchema = new Schema({
  destination: {
    type: String
  },
  date: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
}, {
  collection: 'booking'
})
module.exports = mongoose.model('Booking', travelSchema)
