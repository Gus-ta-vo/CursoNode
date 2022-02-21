const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

  email: { type: String, unique: true, required: true },

  first_name: { type: String, required: true },

  last_name: { type: String, required: true },

  accounts: [{type: mongoose.Schema.Types.ObjectId, ref: 'account'}]

})

module.exports = mongoose.model('client', clientSchema);