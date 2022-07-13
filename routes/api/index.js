//requeire express.router
const router = require('express').Router();
//require access to user-routes.js
const userRoutes = require('./user-routes.js');
//require access to post-routes.js
const postRoutes = require('./post-routes')
//use all routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
//export routes to where it's needed
module.exports = router;