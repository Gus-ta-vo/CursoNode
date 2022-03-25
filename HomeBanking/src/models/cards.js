const mongoose = require('mongoose');

const cardType = ['crédito','débito']
const cardColor = ['gold','silver','titanium','naranja']

const cardSchema = new mongoose.Schema({

  cardholder: { type: String, required: true },

  type: { type: String, required: true, enum: cardType },

  color: { type: String, required: true, enum: cardColor },

  number: { type: Number, required: true, default: 0 },

  cvv: { type: Number, required: true, default: 0 },

  fromDate: { type: Date, required: true, default: Date.now },

  thruDate: { type: Date, required: true, default: Date.now },

  client: {type: mongoose.Schema.Types.ObjectId, ref: 'client'},

})

module.exports = mongoose.model('card', cardSchema);