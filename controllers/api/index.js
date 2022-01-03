const router = require("express").Router();
const transactionRoutes = require('./transaction-routes');
const userRoutes = require('./user-routes');

router.use('/transaction', transactionRoutes);
router.use('/users', userRoutes);


module.exports = router;