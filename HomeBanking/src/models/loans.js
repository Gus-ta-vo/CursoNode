const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({

  name: { type: String, required: true },

  maxAmount: { type: Number, required: true },

  payments: [{ type: Number, required: true, default: 0 }],

})

module.exports = mongoose.model('loan', loanSchema);