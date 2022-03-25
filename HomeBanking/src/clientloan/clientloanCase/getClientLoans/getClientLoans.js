const { response } = require('express');
const clientloanRepository = require('../../../repositories/clientloanRepository');

const getClientLoans = async (req, res = response )  =>  {
  
  try {
    const clientloans = await clientloanRepository.getAll();
    const count = await clientloanRepository.count();
    if(!clientloans){
      return res.status(401).json({
        message:  'Not found',
      })
    }
    res.status(200).json({
       message: 'ClientLoans',
       response: clientloans,
       total: count
    })
  } catch (error) {
  console.log(error)
    res.status(500).json({
      message: 'Error Interno del Servidor',
      err: error
    })
  }
}

const getClientLoan = async (req, res = response )  =>  {
  try {
    const clientloan = await clientloanRepository.getOne(req.params.id);
    if(!clientloan){
       return res.status(401).json({
        message:  'Not found',
      })
    }
    res.status(200).json({
       message: 'Account',
       response: account,
     })
  } catch (error) {
    res.status(500).json({
      message: 'Error Interno del Servidor',
      err: error
    })
  }
}

  module.exports = {
    getClientLoans,
    getClientLoan
  }