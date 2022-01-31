const express = require('express');//requiring express
const router = express.Router();// setting up the router 

// acquiring controllers so that to use them in different cases
const homeController = require('../controllers/home_controllers');


router.get('/',homeController.home);// if / comes then it will go to homeController.home which was required by controller 
router.get('/h2',homeController.secondhome);// this is our second link that you can access from the same controller you here knows that a 
// a controller can ave multiple links
console.log('Router is up and exported.');

module.exports = router ;//exporting the router