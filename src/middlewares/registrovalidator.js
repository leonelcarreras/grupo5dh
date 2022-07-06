const { body } = require("express-validator")
const path = require('path');
const validations = [

    body("nombre").notEmpty().withMessage("Debe ingresar su Nombre completo"),
    body("apellido").notEmpty().withMessage("Debe ingresar su apellido"),
    body("email").notEmpty().withMessage("Debe ingresar un correo Electrónico"),

    body("password").notEmpty().withMessage("Debe definir una contraseña ").bail().isLength({ min: 8, max: 10 }).withMessage("Su contraseña debe ser de entre 8 y 10 caracteres"),
    body("userProfileImage").custom((value, { req }) => {
        let file = req.file;

        let acceptedExtensions = ['.jpg'];
        if (!file) {
            throw new Error('Ingresar Imagen de Perfil');
        } else {
            let fileExtension = path.extname(file.originalname);

            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extension del archivo permitidas es ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })

]

module.exports = validations




