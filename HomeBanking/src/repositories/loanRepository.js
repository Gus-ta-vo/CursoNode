const Loan = require('../models/loans');

//const Client = require('../models/clients');

const getOne = async (id)  =>  await Loan.findById(id) // .populate('transactions');
const getAll = async ()  =>  await Loan.find() // .populate('transactions');
const count = async ()  =>  await Loan.count();
const updateOne = async () => await Loan.updateone();

const save = async (body) => {
  const loan = new Loan({
    name: body.name,
    maxAmount: body.maxAmount,
    payments: body.payments,
  })
  const createdLoan = await loan.save();
  return loan
}

module.exports = {
  getOne,
  getAll,
  count,
  save,
  updateOne
}