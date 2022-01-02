const router = require("express").Router();
const accountDetailsRoutes = require('./accountdetails-routes');
const transactionRoutes = require('./transaction-routes');
const userRoutes = require('./user-routes');


router.use('./accountdetails-routes', accountDetailsRoutes);
router.use('./transaction-routes', transactionRoutes);
router.use('./user-routes', userRoutes);


module.exports = router;