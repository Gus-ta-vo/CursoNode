const { Router } = require('express');
const router = new Router();

const { getClients, createClient } = require('../client/clientController');
const { getAccount, createAccount } = require('../account/accountController');

router.get('/clients', getClients.getClients);
router.post('/clients', createClient.createClient);
router.get('/client/:id', getClients.getClient);
router.get('/accounts', getAccount.getAccounts);
router.get('/account/:id', getAccount.getAccount);
router.post('/account', createAccount.createAccount);

module.exports = router;