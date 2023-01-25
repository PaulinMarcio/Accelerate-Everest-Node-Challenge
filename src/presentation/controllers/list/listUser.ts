import userData from "../../../domain/user/mocks/UserMock";
import { Request, Response } from "express";

class allUsers{

    handle(req: Request, res: Response){
        res.status(200).send(userData)
    }
}

export = new allUsers();
