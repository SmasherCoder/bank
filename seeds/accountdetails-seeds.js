const { Accountdetails } = require('../models');

const Accountdetailsdata = [
    {
        id: 1,
        account_number: 1900546789,
        balance: 30000,
        account_name: 'Checking',
        user_name: 1
    },
    {
        id: 2,
        account_number: 1800545544,
        balance: 70000,
        account_name: 'Savings',
        user_name: 1
    }
];

const seedAccountdetails = () => Accountdetails.bulkCreate(Accountdetailsdata);

module.exports = seedAccountdetails;
