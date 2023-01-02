const { body } = require('express-validator');

class userValid{
    validation(){
        return[
            body('full_name')
            .notEmpty()
            .withMessage(body)
            .isString()
            .withMessage('invalid name'),

            body('email')
            .notEmpty()
            .withMessage('empty email')
            .isString()
            .isEmail()
            .withMessage('invalid email'),

            body('email_confirmation')
            .notEmpty()
            .withMessage('empty confirmation email')
            .isString()
            .isEmail()
            .withMessage('invalid confirmation email'),

            body('cpf')
            .notEmpty()
            .withMessage('empty cpf')
            .isString()
            .withMessage('invalid cpf'),


            body('cellphone')
            .notEmpty()
            .withMessage('empty cellphone')
            .isString()
            .withMessage('invalid cellphone'),

            body('birthdate')
            .notEmpty()
            .withMessage('empty birthdate')
            .isDate()
            .default(() =>{
                new Date.parse()
            })
            .withMessage("invalid birthdate"),

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
};

module.exports = new userValid();
