const { response } = require('express');
const transactionRepository = require('../../../repositories/transactionRepository');
const accountRepository = require('../../../repositories/accountRepository')

const createTransaction = async (req, res = response )  =>  {
    try {
      await transactionRepository.save(req.body);
      return res.status(201).json({
         message: 'La transacción se realizó correctamente',
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

const createTransfer = async (req, res = response )  =>  {
  const fromAccountNumber = req.query.fromAccountNumber;
  const toAccountNumber = req.query.toAccountNumber;
  const amount = req.query.amount;
  const description = req.query.description;
  console.log("Cuenta Origen:" + fromAccountNumber)
  console.log("Cuenta Destino:" + toAccountNumber)
  console.log("Monto:" + amount)
  console.log("Descripcion:" + description)
  try {
    const cuentaOrigen= await accountRepository.getOneNumber(fromAccountNumber)
    const cuentaDestino= await accountRepository.getOneNumber(toAccountNumber)
    acreditarOrigen={ type: 'débito', amount: amount, account: cuentaOrigen, description: description}
    debitarDestino={ type: 'crédito', amount: amount, account: cuentaDestino, description: description}
    const acreditar = await transactionRepository.save(acreditarOrigen);
    const debitar = await transactionRepository.save(debitarDestino);
    return res.status(201).json({
      message: 'La transferemcia fue exitosa' + acreditar + debitar,
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
    createTransaction,
    createTransfer
  }