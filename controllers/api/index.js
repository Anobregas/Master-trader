const router = require('express').Router();
const galleryRoutes = require('./gallery-routes');

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;
