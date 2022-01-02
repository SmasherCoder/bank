//import all models
const User = require('./User');
const Accountdetails = require('./Accountdetails');
const Transaction = require('./Transaction');

//associations between tables
Accountdetails.hasMany(Transaction, {
    foreignKey: 'acct_id'
});

Transaction.belongsTo(Accountdetails, {
    foreignKey: 'acct_id'
});

User.hasMany(Accountdetails, {
    foreignKey: 'user_name'
});

Accountdetails.belongsTo(User, {
    foreignKey: 'user_name'
});

module.exports = { User, Accountdetails, Transaction };