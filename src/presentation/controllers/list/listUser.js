const users = require("../../../domain/user/mocks/UserMock");

class allUsers{

    handle(req, res){
        res.status(200).send(users)
    }
};

module.exports = new allUsers();
