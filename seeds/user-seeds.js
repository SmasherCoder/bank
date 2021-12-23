const { User } = require('../models');

const Userdata = [
    {
        user_name: 'user',
        first_name: 'Johnny',
        last_name: 'Cash',
        password: 'password'
    }
];

const seedUser = () => User.bulkCreate(Userdata);

module.exports = seedUser;