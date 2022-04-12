const express = require("express");
const router = express.Router();


const mainController = require("../controllers/mainController");


router.get("/", mainController.home);
router.get("/login", mainController.login);
// router.post("/login/create", mainController.create);

router.get("/registro", mainController.registro);
router.post("/registro/create", mainController.create);



router.get("/cart", mainController.cart);
router.get("/productDetail", mainController.productDetail);
router.get("/altaProducto", mainController.productDetail);




module.exports = router;