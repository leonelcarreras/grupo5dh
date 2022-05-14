module.exports = [
body (fullName).notEmpty().withMessage('Tienes que escribir un nombre'),

body('email')
.notEmpty().withMessage('Tienes que escribr un correo electrónico').bail()
.isEmail()withMessage('Debes escribir un correo electrónico válido'),

body('password').notEmpty().withMessage('Tienes que escribir una contraseña')

]