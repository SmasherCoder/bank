const seedAccountdetails = require('./accountdetails-seeds');
const seedUser = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    // await sequelize.sync({ force: true });
    // console.log('----------------');

    await seedAccountdetails();
    console.log('----------------');

    await seedUser();
    console.log('----------------');

    await seedTransaction();
    console.log('----------------');

    process.exit(0);
};

seedAll();