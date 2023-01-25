"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const HandleValid_1 = require("../domain/user/services/HandleValid");
const router = (0, express_1.Router)();
const listUser_1 = __importDefault(require("./controllers/list/listUser"));
const createUser_1 = __importDefault(require("./controllers/create/createUser"));
router.get("/customer", listUser_1.default.handle);
router.post("/create-user", HandleValid_1.validation, createUser_1.default.create);
module.exports = router;
