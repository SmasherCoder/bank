const router = require("express").Router();
const { Transaction } = require('../../models');

// GET /api/transaction/checking
router.get('/savings', (req, res) => {
  // Access our transaction model and run .findAll() method)
  Transaction.findAll({
    where: {
      acct_id: 2
    }, attributes: ['date', 'description', 'amount']
  })
    .then(dbTransactionData => {
      console.log(dbTransactionData)
      var transaction = dbTransactionData
      res.render("savings", { transaction })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/transaction
router.post('/', (req, res) => {
  Transaction.create({
    date: req.body.date,
    type: req.body.type,
    amount: req.body.amount,
    status: req.body.status,
    account_id: req.body.account_id
  })
    .then(dbTransactionData => res.json(dbTransactionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
