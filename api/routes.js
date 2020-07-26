const express = require('express');
const routes = express.Router();
const Account = require('./controllers/Account');

routes.get('/token', Account.Consents);
routes.get('/saldo', Account.Saldo);
routes.get('/transactions', Account.Transactions);

module.exports = routes;