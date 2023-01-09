const users = require('../../../domain/user/mocks/UserMock');

class createUser {
    create(req, res) {
        try {
            const User = req.body;
            users.push(User);



            return res.status(201).send('Usuário criado com sucesso!');

        } catch (err) {
            return res.status(40).send(`Erro: ${err}`);
        }
    }
};

module.exports = new createUser();
