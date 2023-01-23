import users from '../../../domain/user/mocks/UserMock';

class createUser {
    create(req, res) {
        const User = req.body;
        users.push(User);
        return res.status(201).send('Usuário criado com sucesso!');

    }
}

export = new createUser();
