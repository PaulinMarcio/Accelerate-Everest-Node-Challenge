import { Router } from "express";

import userSchema from "../domain/user/services/UserValid";
import validError from '../domain/user/services/HandleValid';

const router = Router();

import allUsers from './controllers/list/listUser';
import createUser from './controllers/create/createUser';

router.get("/customer", allUsers.handle);
router.post("/create-user", validError(userSchema), createUser.create);

export = router;
