var express = require('express');
var router = express.Router();
let userController = require('../controllers/userControll');

/* GET users listing. */
router.get('/', userController.home);

router.post('/login', userController.loginUser);

module.exports = router;
