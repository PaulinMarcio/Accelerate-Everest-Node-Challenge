import * as yup from "yup";
export interface userSchemaI {
full_name: string;
email: string;
email_confirmation: string;
cpf: string;
cellphone: string;
birthdate: Date;
email_sms: boolean;
whatsapp: boolean;
country: string;
city: string;
postal_code: string;
address: string;
number: number;
}

const userSchema = yup.object().shape({
  full_name: yup.string().required(),
  email: yup.string().email().required(),
  email_confirmation: yup
    .string()
    .email()
    .required()
    .oneOf([yup.ref("email"), null], "emails do not match"),
  cpf: yup.string().required(),
  cellphone: yup.string().required(),
  birthdate: yup.date().required(),
  email_sms: yup.boolean().required(),
  whatsapp: yup.boolean().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  postal_code: yup.string().required(),
  address: yup.string().required(),
  number: yup.number().required(),
});

export default userSchema;
