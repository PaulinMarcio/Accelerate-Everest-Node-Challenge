import { Request, Response, NextFunction } from "express"
import { userSchema } from "./UserValid";
import users from "../mocks/UserMock"

const validation = (schema: typeof userSchema) => async(req: Request, res:Response, next:NextFunction) => {
  const body: typeof users = req.body;

  try{
    await schema.validate(body)
    next()
  } catch(err){
    return res.status(400).json({err})
  }
};

export = validation;
