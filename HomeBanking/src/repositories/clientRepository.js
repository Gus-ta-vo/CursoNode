const Client = require('../models/clients');

const getAll = async ()  =>  await Client.find();

const getOne = async ()  =>  await Client.findById(id);

const count = async ()  =>  await Client.count();

const update = async () => await Client.update();

const save = async () => await Client.save();

module.exports = {

  getAll,

  getOne,

  count,

  update,

  save
}