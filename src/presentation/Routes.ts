import { Request, Response, Router } from 'express';
import { validation } from 'domain/services/HandleValid';
import { userSchema } from "domain/schema/UserValid";


import { listUserUseCase } from '../useCases/ListUser/ListUser';
import { createUserController } from '../useCases/CreateUser/CreateUserIndex';

export const router = Router();
router.get("/customer", listUserUseCase.list);
router.post("/create-user", validation(userSchema), (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});
