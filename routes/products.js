const express = require("express");
const router = express.Router();


const productController = require("../controllers/productsController");


// Detalle del Producto //
router.get("/productDetail/:id", productController.productDetail);



// Alta del Producto //

router.get("/altaProducto", productController.altaProducto);

// Edición del Producto //
router.get("/editarProducto", productController.editarProducto);


router.get("/cart", productController.cart);





module.exports = router;    