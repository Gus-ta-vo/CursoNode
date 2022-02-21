const Client = require('../models/clients');

const getAll = async ()  =>  await Client.find().populate('accounts');

const getOne = async (id)  =>  await Client.findById(id).populate('accounts');

const count = async ()  =>  await Client.count();

const updateOne = async () => await Client.updateone();

const save = async (body) => {
  const client = new Client({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email
  })
  await client.save();
  return client
}


module.exports = {

  getAll,

  getOne,

  count,

  updateOne,

  save
}