const { Router }  = require("express");

const router = Router()

const userValid = require('../domain/user/services/UserValid');
const validError = require('../domain/user/services/HandleValid')

const allUsers = require('./controllers/list/listUser');
const createUser = require('./controllers/create/createUser');
const createUserPT = require('./controllers/create/createUserPartTwo');

const error = validError.validate;

router.get("/customer", allUsers.handle);
router.post("/create-user-page-one", userValid.validation(), error, createUser.create);
router.post("/create-user-page-two", userValid.secondValidation(), error, createUserPT.secondPart);

module.exports = router;
