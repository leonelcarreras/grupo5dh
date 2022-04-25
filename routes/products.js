const express = require("express");
const router = express.Router();
const path = require("path")

const productController = require("../controllers/productsController");

const multer = require("multer");
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



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       let folder = path.join(__dirname, "../../public/images/products");
//       console.log(folder);
//       cb(null, folder);
//     },
//     filename: function (req, file, cb) {
//       console.log(file);
//       const fileName = Date.now() + "-" + file.originalname;
//       cb(null, fileName);
//     },
//   });

const upload = multer ({storage});


router.get("/", productController.home);

// Detalle del Producto //
router.get("/productDetail/:id", productController.productDetail);



// Alta del Producto //

router.get("/altaProducto", productController.altaProducto);
router.post("/",upload.any("imageColor1","imageColor2","imageColor3") ,productController.store);

// Edición del Producto //
router.get("/editarProducto", productController.editarProducto);


router.get("/cart", productController.cart);





module.exports = router;    