const Account = require('../models/accounts');
const Client = require('../models/clients');

const getOne = async (id)  =>  await Account.findById(id);
const getAll = async ()  =>  await Account.find();
const count = async ()  =>  await Account.count();

const save = async (body) => {
  const account = new Account({
    number: body.number,
//    creationDate: body.creationDate,
//    balance: body.balance,
    client: body.client
  })
  const createdAccount = await account.save();
//  6206e8396050b17e6e1b02f3
//  const client = await Client.findById(createdAccount.client)
  console.log("paso1")
  const client = await Client.findById('6206e8396050b17e6e1b02f3')
  console.log("paso2")

  console.log(client)
  client.accounts.push(createdAccount._id)
  console.log("paso3")

  console.log(client.accounts)
  await Client.updateOne({_id: client._id}, client);
  return account
}

module.exports = {
  getOne,
  getAll,
  count,
  save
}