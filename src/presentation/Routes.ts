import { Request, Response, Router } from 'express';
import { userValidateInstance } from '@domain/services/ValidationIndex';
import { listUserUseCase } from '../useCases/ListUser/ListUser';
import { createUserController } from '../useCases/CreateUser/CreateUserIndex';

const router = Router();

router.get("/customer", listUserUseCase.list);
router.post("/create-user", userValidateInstance.validate, (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

export default router