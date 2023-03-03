import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import {ICreateUserDTO} from "./CreateUserDTO";
import { CreateUserService } from './CreateUserService';

@injectable()
export class CreateUserController {
    constructor(
        @inject("CreateUserRepository")
        private createUser: CreateUserService
    ) { }

    handle(req: Request, res: Response) {

        const user: ICreateUserDTO = req.body;

        try {

            this.createUser.execute(user)
            res.json(user)
            return res;
        
        } catch (err) {

            return err
        
        }
    }
}
