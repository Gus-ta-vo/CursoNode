const { response } = require('express');
const loanRepository = require('../../../repositories/loanRepository');

const createLoan = async (req, res = response )  =>  {
    console.log(req.body)
    try {
      await loanRepository.save(req.body);
      return res.status(201).json({
         message: 'El prestamos se creó correctamente',
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

  module.exports = {
    createLoan
  }