const express = require("express");
const router = express.Router();
const path = require("path")

const productController = require("../../controllers/api/productsController");

/* const productValidations = require("../middlewares/productValidator"); */

// const { path } = require('../app');
/* const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        let folder = path.join(__dirname, "../../Public/images/products")
        console.log(folder);
        cb(null, folder);
        console.log(folder);
    },

    filename: function (req, file, cb) {
        const fileName = Date.now() + "-" + file.originalname;
        cb(null, fileName);
        console.log(fileName);
    },


});



const upload = multer({ storage }); */


// router.get("/", productController.home);

router.get("/", productController.products);


// Detalle del Producto //
router.get("/productDetail/:id", productController.productDetail);

// PRoductos por Marca //

router.get("/:marca", productController.productsByBrand);


// Listado de Marcas //

router.get("/marcas/listado", productController.marcas);

// Alta del Producto //

/* router.get("/altaProducto",productValidations, productController.altaProducto);
router.post("/", upload.any("imagecolor1", "imagecolor2", "imagecolor3"),productValidations, productController.create);
 */
// Edición del Producto //
/* router.get("/editarProducto/:id", productController.editarProducto);
router.patch("/editarProducto/:id", upload.any("imagecolor1", "imagecolor2", "imagecolor3"),productValidations,productController.updateProduct);


router.get("/cart", productController.cart);
 */

/* // Delete Producto //

router.post("/:id", productController.destroy); */

module.exports = router;    