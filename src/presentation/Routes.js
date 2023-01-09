const { Router } = require("express");

const userSchema = require("../domain/user/services/UserValid");
const validError = require('../domain/user/services/HandleValid');
const error = validError;

const router = Router();

const allUsers = require('./controllers/list/listUser');
const createUser = require('./controllers/create/createUser');

router.get("/customer", allUsers.handle);
router.post("/create-user", error(userSchema), createUser.create);

module.exports = router;
