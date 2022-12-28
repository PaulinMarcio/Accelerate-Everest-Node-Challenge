const { body } = require('express-validator');

class userValid{
    validation(){
        return[
            body('fullname')
            .isString()
            .withMessage('Nome inválido!'),

            body('email')
            .isString()
            .isEmail()
            .withMessage('Email inválido!'),

            body('email_confirmation')
            .isString()
            .isEmail()
            .withMessage('Email inválido!'),

            body('cpf')
            .isString()
            .withMessage('CPF inválido!'),

            body('cellphone')
            .isString()
            .withMessage('Telefone inválido!'),

            body('birthdate')
            .isDate()
            .default(() =>{
                new Date.parse()
            })
            .withMessage("Data inválida!"),

            body('email_sms')
            .isBoolean(),

            body('whatsapp')
            .isBoolean(),
        ]
    }

    secondValidation(){
        return[
            body('country')
            .isString()
            .withMessage('País inválido!'),

            body('city')
            .isString()
            .withMessage('Cidade inválida!'),

            body('postal_code')
            .isString()
            .withMessage('CEP inválido!'),

            body('address')
            .isString()
            .withMessage('Endereço inválido!'),

            body('number')
            .isNumeric()
            .withMessage('Número inválido!')
        ]
    }
}

module.exports = new userValid();