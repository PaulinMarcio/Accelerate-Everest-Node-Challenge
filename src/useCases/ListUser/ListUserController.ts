import { Request, Response } from 'express';

import { users } from "../../domain/user/User";

export class ListUser {

    list(req: Request, res: Response) {

        return res.status(201).send(users);

    }

}
