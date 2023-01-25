"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const UserMock_1 = __importDefault(require("../../../domain/user/mocks/UserMock"));
class allUsers {
    handle(req, res) {
        res.status(200).send(UserMock_1.default);
    }
}
module.exports = new allUsers();
