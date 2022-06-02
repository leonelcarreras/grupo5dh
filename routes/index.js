const express = require("express");
const router = express.Router();


const mainController = require("../controllers/mainController");
const productController = require("../controllers/productsController");
router.get("/", mainController.home);
router.get("/login", mainController.login);


router.get("/registro", mainController.registro);
router.post("/registro/create", mainController.create);
router.get("/altaProducto", productController.altaProducto);

router.get("/cart", mainController.cart);







module.exports = router;