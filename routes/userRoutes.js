const express = requiere("express");
const router = express.Router();

const userController = require("../controllers/userController");

//Middlewares
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");

//Formulario de registro
// crear REGISTER router.get('../register', userController.register)

//perfil usuario
router.get('/profile/:userId', userController.profile)

//FORMULARIO DE LOGIN - 52:28

router.get('/login', userController.login);

module.exports = router;
