const mongoose = require('mongoose');
const TransactionType = ['crédito','débito']

const transactionSchema = new mongoose.Schema({

  type: { type: String, required: true, enum: TransactionType },

  amount: { type: Number, required: true },

  description: { type: String, required: true, default: 'sin descripcion' },

  date: { type: Date, required: true, default: Date.now },

  account: {type: mongoose.Schema.Types.ObjectId, ref: 'account'}

})

module.exports = mongoose.model('transaction', transactionSchema);