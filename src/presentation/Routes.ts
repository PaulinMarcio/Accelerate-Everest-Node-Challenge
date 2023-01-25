import { Router } from "express";
import validation from '../domain/user/services/HandleValid';
const router = Router();
import allUsers from './controllers/list/listUser';
import createUser from './controllers/create/createUser';
import { userSchema } from "../domain/user/services/UserValid";

router.get("/customer", allUsers.handle);
router.post("/create-user", validation(userSchema), createUser.create);

export = router;
