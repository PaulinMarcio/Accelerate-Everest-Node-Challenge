import { Request, Response } from 'express';

import { users } from "../../../domain/user/User";

export class ListUser {

    list(req: Request, res: Response) {

        try {

            return res.status(201).send(users);

        } catch (err) {

            return res.status(500).send(`Unexpected error: ${err}`);

        }

    }

}
