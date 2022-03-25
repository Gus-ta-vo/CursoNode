const Client = require('../models/clients');

const getAll = async ()  =>  await Client.find();

const getOne = async (id)  =>  await Client.findById(id);

const getPorEmail = async (email)  => await Client.findOne({email: email})

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

  getPorEmail,

  count,

  updateOne,

  save
}