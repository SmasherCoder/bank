const router = require('express').Router();
const sequelize = require('../config/connection');
const { Accountdetails, Transaction, User } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/acctselection', (req, res) => {
  res.render('accountselection');
});

router.get('/checking', (req, res) => {
  res.render('checking');
});

router.get('/savings', (req, res) => {
  res.render('savings');
});

module.exports = router;
