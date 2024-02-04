var express = require("express");
var router = express.Router();
let userController = require("../controllers/userControll");
const { verifyToken } = require("../Utilities/verifyUser");

/* GET users listing. */
router.get("/", userController.home);

router.post("/login", userController.loginUser);
router.get("/update/:id", userController.showSpecificUser);
router.put("/update/:id", verifyToken, userController.updateUser);

module.exports = router;
