var express = require('express');
var router = express.Router();
let adminController = require('../controllers/adminControll');

/* Crud Operations made by admin on user. */
router.get('/', adminController.getAlldetails);
router.post('/create', adminController.createUser);
router.post('/a_login', adminController.login);
// router.get('/update/:id', adminController.showSpecificUser);
// router.put('/update/:id', adminController.updateUser);
router.delete('/delete/:id', adminController.deleteUser);
router.put('/block/:id', adminController.blockUser);

module.exports = router;
