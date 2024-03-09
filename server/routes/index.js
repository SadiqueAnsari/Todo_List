var express = require('express');
var router = express.Router();
let userController = require('../Controller/user')
let taskController = require('../Controller/task')
const { validateSignup, validateLogin } = require('../Middleware/validator');
const { isAuthorize } = require('../Middleware/authorization');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.post('/register',validateSignup,userController.userRegistration)
router.post('/login',validateLogin,userController.userLogin)
router.post('/user/createTask',isAuthorize,taskController.createTask)
router.get('/user/getTask',taskController.getTask)

module.exports = router;
