import { Request, Response, NextFunction } from "express"
import { userSchema } from "./UserValid";

const validation = (schema: typeof userSchema) => async(req: Request, res:Response, next:NextFunction) => {
  const body = req.body;

  try{
    await schema.validate(body)
    next()
  } catch(err){
    return res.status(400).json({err})
  }
};

export = validation;
