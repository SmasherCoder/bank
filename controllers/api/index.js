const router = require("express").Router();
const accountDetailsRoutes = require('./accountdetails-routes');
const transactionRoutes = require('./transaction-routes');
const userRoutes = require('./user-routes');


router.use('/accountdetails', accountDetailsRoutes);
router.use('/transaction', transactionRoutes);
router.use('/users', userRoutes);


module.exports = router;