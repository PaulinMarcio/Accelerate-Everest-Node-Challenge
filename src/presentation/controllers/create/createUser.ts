import { users } from "src/domain/user/User";
import { Request, Response } from "express"

export class createUser {
    create(req: Request, res: Response) {
        const User = req.body;
        users.push(User);
        return res.status(201).send('Usuário criado com sucesso!');

    }
}
