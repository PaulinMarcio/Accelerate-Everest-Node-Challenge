"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const listUser_1 = __importDefault(require("./controllers/list/listUser"));
const HandleValid_1 = __importDefault(require("../domain/user/services/HandleValid"));
const UserValid_1 = require("../domain/user/services/UserValid");
const createUser_1 = __importDefault(require("./controllers/create/createUser"));
const router = (0, express_1.Router)();
router.get("/customer", listUser_1.default.handle);
router.post("/create-user", (0, HandleValid_1.default)(UserValid_1.userSchema), createUser_1.default.create);
module.exports = router;
