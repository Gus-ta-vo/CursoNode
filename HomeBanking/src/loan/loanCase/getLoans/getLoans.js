const { response } = require('express');
const loanRepository = require('../../../repositories/loanRepository');

const getLoans = async (req, res = response )  =>  {
  try {
    const loans = await loanRepository.getAll();
    const count = await loanRepository.count();
    if(!loans){
      return res.status(401).json({
        message:  'Not found',
      })
    }
    res.status(200).json({
       message: 'Loans',
       response: loans,
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

const getLoan = async (req, res = response )  =>  {
  try {
    const loan = await loanRepository.getOne(req.params.id);
    if(!loan){
       return res.status(401).json({
        message:  'Not found',
      })
    }
    res.status(200).json({
       message: 'Loan',
       response: loan,
     })
  } catch (error) {
    res.status(500).json({
      message: 'Error Interno del Servidor',
      err: error
    })
  }
}

  module.exports = {
    getLoans,
    getLoan
  }