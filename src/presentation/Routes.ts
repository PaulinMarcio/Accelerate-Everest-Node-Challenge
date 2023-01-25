import { Router } from "express";
import allUsers from './controllers/list/listUser';
import validation from '../domain/user/services/HandleValid';
import { userSchema } from "../domain/user/services/UserValid";
import createUser from './controllers/create/createUser';

const router = Router();

router.get("/customer", allUsers.handle);
router.post("/create-user", validation(userSchema), createUser.create);

export = router;
