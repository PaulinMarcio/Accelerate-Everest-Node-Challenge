const yup = require("yup");

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

module.exports = userSchema;
