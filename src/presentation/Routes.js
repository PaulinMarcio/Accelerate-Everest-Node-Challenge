const { Router } = require("express");

const router = Router();

const userValid = require('../domain/user/services/UserValid');
const validError = require('../domain/user/services/HandleValid');

const allUsers = require('./controllers/list/listUser');
const createUser = require('./controllers/create/createUser');

const error = validError.validate;

router.get("/customer", allUsers.handle);
router.post("/create-user", userValid.validation(), error, createUser.create);

module.exports = router;
