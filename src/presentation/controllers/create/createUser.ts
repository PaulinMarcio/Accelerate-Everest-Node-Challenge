import users from '../../../domain/user/mocks/UserMock';
import {Request, Response} from "express"
class createUser {
    create(req: Request, res: Response) {
        const User = req.body;
        users.push(User);
        return res.status(201).send('Usuário criado com sucesso!');

    }
}

export = new createUser();
