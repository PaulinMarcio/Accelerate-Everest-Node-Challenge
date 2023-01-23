import {Request, Response, NextFunction} from "express"
import {userSchemaI} from "./UserValid";
function validation(userSchema: userSchemaI) {
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
