const { response } = require('express');
const clientRepository = require('../../../repositories/clientRepository');

const getClients = async (req, res = response )  =>  {
    try {
      const clients = await clientRepository.getAll();
      const count = await clientRepository.count();
      if(!clients){
        return res.status(401).json({
          message:  'Not found',
        })
      }
      res.status(200).json({
         message: 'Clients',
         response: clients,
         total: count
      })
    } catch (error) {
      res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

  const getClient = async (req, res = response )  =>  {
    try {
      const client = await clientRepository.getOne(req.params.id);
      if(!client){
        return res.status(401).json({
          message:  'Not found',
        })
      }
      res.status(200).json({
         message: 'Client',
         response: client,
       })
    } catch (error) {
      res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

  module.exports = {
    getClients,
    getClient
  }