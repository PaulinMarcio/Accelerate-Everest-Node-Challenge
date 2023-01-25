"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    full_name: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    email_confirmation: zod_1.z.string().email(),
    cpf: zod_1.z.string().min(11),
    cellphone: zod_1.z.string().min(11),
    birthdate: zod_1.z.date(),
    email_sms: zod_1.z.boolean(),
    whatsapp: zod_1.z.boolean(),
    country: zod_1.z.string().min(2),
    city: zod_1.z.string().min(3),
    postal_code: zod_1.z.string().min(8),
    address: zod_1.z.string().min(3),
    number: zod_1.z.number(),
}).refine(data => data.email === data.email_confirmation, {
    message: "Email_confirmation must match Email.",
    path: ["email_confirmation"],
});
exports.userSchema = userSchema;
