const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn")

//All paths start wiht '/api/users'

router.get('/check-token', ensureLoggedIn, usersController.checkToken);

//POST /api/users
router.post('/', usersController.create);
router.post('/login', usersController.login)

module.exports = router;