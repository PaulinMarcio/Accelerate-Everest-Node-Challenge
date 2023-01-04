const { body } = require('express-validator');

class userValid {
    validation() {
        return [
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
                .default(() => {
                    new Date.parse()
                })
                .withMessage("invalid birthdate"),

            body('email_sms')
                .isBoolean(),

            body('whatsapp')
                .isBoolean(),

            body('country')
                .notEmpty()
                .withMessage('empty country')
                .isString()
                .withMessage('invalid country'),

            body('city')
                .notEmpty()
                .withMessage('empty city')
                .isString()
                .withMessage('invalid city'),

            body('postal_code')
                .notEmpty()
                .withMessage('empty postal_code')
                .isString()
                .withMessage('invalid postal_code'),

            body('address')
                .notEmpty()
                .withMessage('empty address')
                .isString()
                .withMessage('invalid address'),

            body('number')
                .notEmpty()
                .withMessage('empty number')
                .isNumeric()
                .withMessage('invalid number')
        ]
    }
};

module.exports = new userValid();
