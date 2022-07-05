const express = require("express");
const router = express.Router();


const mainController = require("../controllers/mainController");
const productController = require("../controllers/productsController");
const productValidations = require("../middlewares/productValidator");
router.get("/", mainController.home);
router.get("/login", mainController.login);


// router.get("/registro", mainController.registro);
// router.post("/registro/create", mainController.create);
router.get("/altaProducto",productValidations, productController.altaProducto);

router.get("/cart", mainController.cart);







module.exports = router;