import {Request, Response, NextFunction} from "express"
import userSchema from "./UserValid"

function validation(userSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      await userSchema.validate(body);
      next();
    } catch (err) {
      return res.status(400).json({ err });
    }
  };
}

export = validation;
