"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const UserMock_1 = __importDefault(require("../../../domain/user/mocks/UserMock"));
class createUser {
    create(req, res) {
        const User = req.body;
        UserMock_1.default.push(User);
        return res.status(201).send('Usuário criado com sucesso!');
    }
}
module.exports = new createUser();
