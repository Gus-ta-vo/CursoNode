const Transaction = require('../models/transactions');
const Account = require('../models/accounts');

const getOne = async (id)  =>  await Transaction.findById(id);
const getAll = async ()  =>  await Transaction.find();
const count = async ()  =>  await Transaction.count();

const save = async (body) => {
  const transaction = new Transaction({
    type: body.type,
    amount: body.amount,
    account: body.account,
    description: body.description
  })
  if (transaction.amount < 0) {
    throw "Monto no válido" 
  }
  if (transaction.type === 'débito') {
    transaction.amount = transaction.amount * -1
  }
  const createdTransaction = await transaction.save();
  const account = await Account.findById(createdTransaction.account._id)
  account.transactions.push(createdTransaction._id)
  account.balance += transaction.amount
  await Account.updateOne({_id: account._id}, account);
  return transaction
}

module.exports = {
  getOne,
  getAll,
  count,
  save
}