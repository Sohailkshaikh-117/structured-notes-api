const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

const loginPath = '/login';

authRouter.post(loginPath, authController.login);

module.exports = authRouter;