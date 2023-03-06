import { ICreateUserDTO } from "src/useCases/CreateUser/CreateUserDTO";

export const user: ICreateUserDTO = {
    fullName: "",
    email: "marcio.paulin@warren.com.br",
    emailConfirmation: "marcio.paulin@warren.com.br",
    cpf: "",
    cellphone: "",
    birthdate: new Date(),
    emailSms: true,
    whatsapp: false,
    country: "",
    city: "",
    postalCode: "",
    address: "",
    number: 10
}
