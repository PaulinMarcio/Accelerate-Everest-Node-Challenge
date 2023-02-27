import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import {ICreateUserRepository} from "@repository/ICreateUser";
import {ICreateUserDTO} from "../../../useCases/CreateUser/CreateUserDTO";

@injectable()
export class CreateUserController {
    constructor(
        @inject("CreateUserRepository")
        private createUser: ICreateUserRepository
    ) { }

    handle(req: Request, res: Response) {

        const user: ICreateUserDTO = req.body;

        try {

            this.createUser.create(user)
            return res;
        
        } catch (err) {

            return res.status(500).send(`${err}`)
        
        }
    }
}
