const { response } = require('express');
const accountRepository = require('../../../repositories/accountRepository');

const createAccount = async (req, res = response )  =>  {
    try {
      await accountRepository.save(req.body);
      return res.status(201).json({
         message: 'La Cuenta se creó correctamente',
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

  module.exports = {
    createAccount
  }