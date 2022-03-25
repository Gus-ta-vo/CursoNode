const mongoose = require('mongoose');

const clientloanSchema = new mongoose.Schema({

  amount: { type: Number, required: true },

  payment: { type: Number, required: true },

  client: {type: mongoose.Schema.Types.ObjectId, ref: 'client', autopopulate: true},

  loan: {type: mongoose.Schema.Types.ObjectId, ref: 'loan', autopopulate: true},
  
})

clientloanSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('clientloan', clientloanSchema);
