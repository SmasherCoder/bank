const router = require("express").Router();
const { Accountdetails } = require('../../models');

// GET /api/accountdetails
router.get('/', (req, res) => {
    // Access our Accountdetails model and run .findAll() method)
    User.findAll()
      .then(dbAccountdetailsData => res.json(dbAccountdetailsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST /api/account details
router.post('/', (req, res) => {
    Accountdetails.create({
      account_number: req.body.account_number,
      balance: req.body.balance,
      account_name: req.body.account_name,
      user_name: req.body.user_name
    })
      .then(dbAccountdetailsData => res.json(dbAccountdetailsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
