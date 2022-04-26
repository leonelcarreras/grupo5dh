const express = require("express");
const router = express.Router();
const path = require("path")

const productController = require("../controllers/productsController");

const multer = require("multer");
const productsController = require("../controllers/productsController");
// const { path } = require('../app');

const storage = multer.diskStorage ({
    destination: function(req, file, cb) {

        let folder = path.join(__dirname ,"../Public/images/products")

        cb(null,folder);
        console.log(folder);
    },

    filename: function(req, file, cb){
  const fileName = Date.now()+ "-" + file.originalname  ;
        cb(null, fileName);
        console.log(fileName); },

        
});



const upload = multer ({storage});


router.get("/", productController.home);

// Detalle del Producto //
router.get("/productDetail/:id", productController.productDetail);

// Alta del Producto //

router.get("/altaProducto", productController.altaProducto);
router.post("/",upload.any("imagecolor1","imagecolor2","imagecolor3") ,productController.store);

// Edición del Producto //
router.get("/editarProducto/:id", productController.editarProducto);
router.patch("/editarProducto/:id",upload.any("imagecolor1","imagecolor2","imagecolor3"), productController.updateProduct);

router.get("/cart", productController.cart);


// Delete Producto //

router.delete("/:id", productsController.destroy);

module.exports = router;    