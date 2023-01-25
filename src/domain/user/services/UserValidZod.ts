import { z } from "zod";

const userSchema = z.object({
    full_name: z.string().min(3),
    email: z.string().email(),
    email_confirmation: z.string().email(),
    cpf: z.string().min(11),
    cellphone: z.string().min(11),
    birthdate: z.date(),
    email_sms: z.boolean(),
    whatsapp: z.boolean(),
    country: z.string().min(2),
    city: z.string().min(3),
    postal_code: z.string().min(8),
    address: z.string().min(3),
    number: z.number(),
}).refine(data => data.email === data.email_confirmation, {
    message: "Email_confirmation must match Email.",
    path: ["email_confirmation"],
})

type schemaType = z.infer<typeof userSchema>

export {userSchema, schemaType}
