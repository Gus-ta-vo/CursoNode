const { Router } = require('express');
const router = new Router();
const verifyToken = require('./validate-token');

const { getClients, createClient } = require('../controllers/clientController');
const { getAccount, createAccount } = require('../controllers/accountController');
const { getTransaction, createTransaction } = require('../controllers/transactionController');
const { getLoans, createLoan } = require('../controllers/loanController');
const { getClientLoans, createClientLoan } = require('../controllers/clientloanController');
const { getCard, createCard } = require('../controllers/cardController');

router.get('/clients', verifyToken, getClients.getClients);
router.post('/clients', verifyToken, createClient.createClient);
router.get('/client/:id', verifyToken, getClients.getClient);

router.get('/accounts', verifyToken, getAccount.getAccounts);
router.get('/account/:id', verifyToken, getAccount.getAccount);
router.post('/account', verifyToken, createAccount.createAccount);

router.get('/transactions', verifyToken, getTransaction.getTransactions);
router.get('/transaction/:id', verifyToken, getTransaction.getTransaction);
router.post('/transaction', verifyToken, createTransaction.createTransaction);
router.post('/transfer', verifyToken, createTransaction.createTransfer);


router.get('/loans', verifyToken, getLoans.getLoans);
router.post('/loans', verifyToken, createLoan.createLoan);

router.get('/clientloans', verifyToken, getClientLoans.getClientLoans);
router.post('/clientloan', verifyToken, createClientLoan.createClientLoan);

router.get('/cards', verifyToken, getCard.getCards);
router.get('/card/:id', verifyToken, getCard.getCard);
router.post('/card', verifyToken, createCard.createCard);

module.exports = router;