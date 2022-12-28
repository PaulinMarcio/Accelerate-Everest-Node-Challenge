const users = require('../../../domain/user/mocks/UserMock')

class createUser{
    create(req, res){
        try{
            const User = req.body
            if (User.email != User.emailConfirmation)
                return res.status(400).send('Os emails não são iguais!')

            users.push(User)

            return res.status(201).send('OK')

        } catch(err){
            console.log(err)
        }
    }
}

module.exports = new createUser