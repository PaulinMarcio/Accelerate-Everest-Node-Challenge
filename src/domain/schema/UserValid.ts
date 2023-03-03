import { object, string, date, number, boolean, ref } from 'yup';

export const userSchema = object().shape({

    fullName: string().required().min(3),
    email: string().email().required(),
    emailConfirmation: string()
        .email()
        .required()
        .oneOf([ref('email'), null], 'The emails do not match'),
    cpf: string().required().min(11),
    cellphone: string().required().min(11),
    birthdate: date().required(),
    emailSms: boolean().required(),
    whatsapp: boolean().required(),
    country: string().required().min(3),
    city: string().required().min(3),
    postalCode: string().required().min(3),
    address: string().required().min(3),
    number: number().required().min(1)

});
