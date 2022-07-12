const { body } = require("express-validator")
const path = require('path');
const validations = [

    body("email").notEmpty().withMessage("Debe ingresar un Email").bail().isEmail().withMessage("Debe ingresar un Email válido"),
    body("password").notEmpty().withMessage("Debe ingresar su contraseña ").bail().isLength({ min: 8, max: 10 }).withMessage("Su contraseña debe ser de entre 8 y 10 caracteres"),


]

module.exports = validations
