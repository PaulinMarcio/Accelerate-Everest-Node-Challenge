import { User } from '@entities/User';
import { Request, Response } from 'express';

//import {ICreateUserDTO} from "./CreateUserDTO";
import { CreateUserService } from './CreateUserService';
export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    handle(req: Request, res: Response) {

        const user: User = req.body;

        try {

            this.createUserService.execute(user)
            res.json(user)
            return res;
        
        } catch (err) {

            return err
        
        }
    }
}
