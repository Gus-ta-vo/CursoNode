const { response } = require('express');
const clientRepository = require('../../../repositories/clientRepository');

const createClient = async (req, res = response )  =>  {
    try {
      await clientRepository.save(req.body);

      return res.status(201).json({
         message: 'El Cliente se creó correctamente',
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

  module.exports = {
    createClient
  }