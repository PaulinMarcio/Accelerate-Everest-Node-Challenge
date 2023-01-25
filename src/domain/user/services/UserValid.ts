import { object, string, date, number, boolean, ref } from 'yup';

const userSchema = object().shape({

    full_name: string().required(),
    email: string().email().required(),
    email_confirmation: string()
        .email()
        .required()
        .oneOf([ref('email'), null], 'The emails do not match'),
    cpf: string().required(),
    cellphone: string().required(),
    birthdate: date().required(),
    email_sms: boolean().required(),
    whatsapp: boolean().required(),
    country: string().required(),
    city: string().required(),
    postal_code: string().required(),
    address: string().required(),
    number: number().required()

});

export { userSchema };