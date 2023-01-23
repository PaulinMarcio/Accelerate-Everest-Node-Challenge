import userData from "../../../domain/user/mocks/UserMock";

class allUsers{

    handle(req, res){
        res.status(200).send(userData)
    }
}

export = new allUsers();
