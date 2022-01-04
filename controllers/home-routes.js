const router = require('express').Router();
const sequelize = require('../config/connection');
const { Accountdetails, Transaction, User } = require('../models');

router.get('/savings', (req, res) => {
  // Access our transaction model and run .findAll() method)
  Transaction.findAll({
    where: {
      acct_id: 2
    }, attributes: ['date', 'description', 'amount'], order: [['date', 'DESC']]
  })
    .then(dbTransactionData => {
      console.log(dbTransactionData)
      var transaction = dbTransactionData
      res.render('savings', { transaction })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/checking', (req, res) => {
  // Access our transaction model and run .findAll() method)
  Transaction.findAll({
    where: {
      acct_id: 1
    }, attributes: ['date', 'description', 'amount'], order: [['date', 'DESC']]
  })
    .then(dbTransactionData => {
      console.log(dbTransactionData)
      var transaction = dbTransactionData
      res.render('checking', { transaction })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/acctselection', (req, res) => {
  res.render('accountselection');
});

module.exports = router;
