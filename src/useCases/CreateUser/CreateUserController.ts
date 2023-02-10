import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import {ICreateUserRepository} from "@repository/ICreateUser";
import {ICreateUserDTO} from "./CreateUserDTO";

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
            return res.status(201).send('User created');
        } catch (err) {
            return res.status(500).send(err);
        }
    }
}