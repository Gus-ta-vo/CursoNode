const { Router } = require('express');
const router = new Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.post('/logout', authController.logout);

module.exports = router;