"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const yup_1 = require("yup");
const userSchema = (0, yup_1.object)().shape({
    full_name: (0, yup_1.string)().required().min(3),
    email: (0, yup_1.string)().email().required(),
    email_confirmation: (0, yup_1.string)()
        .email()
        .required()
        .oneOf([(0, yup_1.ref)('email'), null], 'The emails do not match'),
    cpf: (0, yup_1.string)().required().min(11),
    cellphone: (0, yup_1.string)().required().min(11),
    birthdate: (0, yup_1.date)().required(),
    email_sms: (0, yup_1.boolean)().required(),
    whatsapp: (0, yup_1.boolean)().required(),
    country: (0, yup_1.string)().required().min(3),
    city: (0, yup_1.string)().required().min(3),
    postal_code: (0, yup_1.string)().required().min(3),
    address: (0, yup_1.string)().required().min(3),
    number: (0, yup_1.number)().required().min(1)
});
exports.userSchema = userSchema;
