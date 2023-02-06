import { users } from "../../../domain/user/UserMock";
import { Request, Response } from "express";

export class allUsers{

    handle(req: Request, res: Response){
        res.status(200).send(users)
    }
}
