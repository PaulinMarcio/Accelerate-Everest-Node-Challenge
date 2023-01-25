"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const UserValid_1 = require("./UserValid");
const validation = (req, res, next) => {
    try {
        UserValid_1.userSchema.validate(req.body);
        next();
    }
    catch (err) {
        return res.status(400).json({ err });
    }
};
exports.validation = validation;
