//import all models
const User = require('./User');
const Accountdetails = require('./Accountdetails');
const Transaction = require('./Transaction');

//associations between tables
Accountdetails.belongsToMany(Transaction, {
    foreignKey: 'acct_id'
});

User.belongsToMany(Accountdetails, {
    foreignKey: 'user_name'
});

module.exports = { User, Accountdetails, Transaction};