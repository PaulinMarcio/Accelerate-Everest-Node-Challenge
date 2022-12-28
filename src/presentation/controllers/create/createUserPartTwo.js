const users = require('../../../domain/user/mocks/UserMock')

class createUserPT{
    secondPart(req, res){
        try{
            const second = req.body

            users[users.length - 1]['location'] = second

            return res.status(201).send('Usuário criado com sucesso!')
        } catch(err){
            console.log(err)
        }
    }
}

module.exports = new createUserPT()