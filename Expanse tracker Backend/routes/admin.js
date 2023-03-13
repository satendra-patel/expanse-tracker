const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const router = express.Router();
const User = require('../models/expanse');


const bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));



router.post('/add-user', adminController.postExpanse)

router.get('/get-users', adminController.getExpanses)

router.delete('/delete-user/:id', adminController.deleteExpanse)

module.exports = router;