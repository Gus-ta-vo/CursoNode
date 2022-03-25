const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

  email: { type: String, unique: true, required: true },

  first_name: { type: String, required: true },

  last_name: { type: String, required: true },

  accounts: [{type: mongoose.Schema.Types.ObjectId, ref: 'account', autopopulate: true }],

  loans: [{type: mongoose.Schema.Types.ObjectId, ref: 'clientloan', autopopulate: true }],

  cards: [{type: mongoose.Schema.Types.ObjectId, ref: 'card', autopopulate: true }],

})

clientSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('client', clientSchema);