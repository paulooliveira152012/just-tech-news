//requeire express.router
const router = require('express').Router();
//require access to user-routes.js
const userRoutes = require('./user-routes.js');
//use all routes
router.use('/users', userRoutes);
//export routes to where it's needed
module.exports = router;