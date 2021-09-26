var express = require('express');
const registerInitialChecks = require('../middlewares/registerCheck');
var router = express.Router();
const register = require("../controllers/register");
/* GET home page. */
router.post('/register', registerInitialChecks, register)

module.exports = router;
