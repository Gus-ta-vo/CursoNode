const Card = require('../models/cards');
const Client = require('../models/clients');

const getOne = async (id)  =>  await Card.findById(id);
const getAll = async ()  =>  await Card.find();
const count = async ()  =>  await Card.count();
const updateOne = async () => await Card.updateone();

const save = async (body) => {
  const card = new Card({
    cardholder: body.cardholder,
    type: body.type,
    color: body.color,
    number: body.number,
    cvv: body.cvv,
    fromDate: body.fromDate,
    thruDate: body.thruDate,
    client: body.client
  })
  const createdCard = await card.save();
  const client = await Client.findById(card.client)
  client.cards.push(createdCard._id)
  await Client.updateOne({_id: client._id}, client);
  return card
}

module.exports = {
  getOne,
  getAll,
  count,
  save,
  updateOne
}