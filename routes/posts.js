const express = require('express');
const router = express.Router();
const userController = require('../controllers/posts_controllers');

router.get('/profile',userController.posts);

module.exports = router;