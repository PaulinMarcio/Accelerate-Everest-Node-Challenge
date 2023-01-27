import { Router } from "express";
import { allUsers } from "@controllers/list/listUser";
import { validation } from '@services/HandleValid';
import { userSchema } from "@services/UserValid";
import { createUser } from '@controllers/create/createUser';

export const router = Router();
const users = new allUsers();
const create = new createUser();

router.get("/customer", users.handle);
router.post("/create-user", validation(userSchema), create.create);
