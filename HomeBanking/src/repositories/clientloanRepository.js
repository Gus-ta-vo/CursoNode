const ClientLoan = require('../models/clientloans');
const Client = require('../models/clients');

const getOne = async (id)  =>  await ClientLoan.findById(id) // .populate('transactions');
const getAll = async ()  =>  await ClientLoan.find() // .populate('transactions');
const count = async ()  =>  await ClientLoan.count();
const updateOne = async () => await ClientLoan.updateone();

const save = async (body) => {
  const clientloan = new ClientLoan({
    amount: body.amount,
    payment: body.payment,
    client: body.client,
    loan: body.loan
  })
  const createdClientLoan = await clientloan.save();
  const client = await Client.findById(createdClientLoan.client)
  client.loans.push(createdClientLoan._id)
  await Client.updateOne({_id: client._id}, client);
  return clientloan
}

module.exports = {
  getOne,
  getAll,
  count,
  save,
  updateOne
}