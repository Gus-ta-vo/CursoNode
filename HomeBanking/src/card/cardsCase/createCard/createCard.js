const { response } = require('express');
const cardRepository = require('../../../repositories/cardRepository');
const clientRepository = require('../../../repositories/clientRepository')

const createCard = async (req, res = response )  =>  {
    console.log(req.body)
    if (!req.body.cardholder) {
      const client = await clientRepository.getOne(req.body.client)
      console.log(client)
      req.body.cardholder = client.first_name + " " + client.last_name
    }
    try {
      await cardRepository.save(req.body);
      return res.status(201).json({
         message: 'La tarjeta se creó correctamente',
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

  module.exports = {
    createCard
  }