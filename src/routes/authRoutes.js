const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


const { login, doLogin, register, doRegister, logout } = require('../controllers/authController');

router.get('/login', authController.login);
router.post('/login', authController.doLogin);
router.get('/register', authController.register);
router.post('/register', authController.doRegister);
router.get('/logout', authController.logout);

module.exports = router;
