const { response } = require('express');
const clientloanRepository = require('../../../repositories/clientloanRepository');
const accountRepository = require('../../../repositories/accountRepository')
const transactionRepository = require('../../../repositories/transactionRepository')

const createClientLoan = async (req, res = response )  =>  {
  console.log(req.body)  
  try {
      await clientloanRepository.save(req.body);
      const cuentaDestino= await accountRepository.getOneNumber(req.body.toAccountNumber)
      debitarDestino={ type: 'crédito', amount: req.body.amount, account: cuentaDestino, description: "`Prestamo Solicitado"}
      const debitar = await transactionRepository.save(debitarDestino);
      return res.status(201).json({
         message: 'El prestamo se creó correctamente',
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
    createClientLoan
  }