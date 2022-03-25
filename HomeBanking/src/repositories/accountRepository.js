const Account = require('../models/accounts');
const Client = require('../models/clients');

const getOne = async (id)  =>  await Account.findById(id).populate('transactions');
const getAll = async ()  =>  await Account.find().populate('transactions');
const count = async ()  =>  await Account.count();
const updateOne = async () => await Account.updateone();
const getOneNumber = async (number) => Account.findOne({number: number})

const save = async (body) => {
  const account = new Account({
    number: body.number,
    creationDate: body.creationDate,
    balance: body.balance,
    client: body.client
  })
  const createdAccount = await account.save();
  const client = await Client.findById(account.client)
  client.accounts.push(createdAccount._id)
  await Client.updateOne({_id: client._id}, client);
  return account
}

module.exports = {
  getOne,
  getAll,
  count,
  save,
  updateOne,
  getOneNumber
}