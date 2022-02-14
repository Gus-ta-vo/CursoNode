const { Router } = require('express');

const router = new Router();

const { getClients } = require('../client/clientController');

router.get('/clients', getClients.getClients);

module.exports = router;