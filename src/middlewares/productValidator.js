const path = require("path")
const { body } = require("express-validator");

const productValidations = [

    body("marca_id").notEmpty().withMessage("Seleccionar una ID de Marca"),
    body("procesador").notEmpty().withMessage("Ingresar Procesador"),
    body("modelo").notEmpty().withMessage("Ingresar Modelo"),
    body("camaraResolucion").notEmpty().withMessage("Ingresar Resolución de Cámara"),
    body("videoResolucion").notEmpty().withMessage("Ingresar Resolución de Video"),
    body("pantallaModelo").notEmpty().withMessage("Ingresar Modelode Pantalla"),
    body("pantallaResolucion").notEmpty().withMessage("Ingresar Resolución de Pantalla"),
    body("memoria").notEmpty().withMessage("Seleccionar Memoria"),
    body("almacenamiento").notEmpty().withMessage("Seleccionar Almacenamiento"),
    body("bateria").notEmpty().withMessage("Ingresar Bateria"),
    body("color").notEmpty().withMessage("Ingresar Color"),
    body("price").notEmpty().withMessage("Ingresar Precio del Producto").bail().isNumeric().withMessage("Esta campo debe ser numérico"),
    body("imagecolor1").custom((value, { req }) => {
		let file = req.files.find(f => f.fieldname == "imagecolor1" );
		let acceptedExtensions = ['.jpg'];
		if (!file) {
			throw new Error('Ingresar Imagen N°1 del Producto');
		} else {
			let fileExtension =path.extname(file.originalname);

			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extension del archivo permitidas es ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
,
    body("imagecolor2").custom((value, { req }) => {
		let file = req.files.find(f => f.fieldname == "imagecolor2" );
		let acceptedExtensions = ['.jpg'];
		if (!file) {
			throw new Error('Ingresar Imagen N°2 del Producto');
		} else {
			let fileExtension =path.extname(file.originalname);

			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extension del archivo permitidas es ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
,
    body("imagecolor3").custom((value, { req }) => {
		let file = req.files.find(f => f.fieldname == "imagecolor3" );
		let acceptedExtensions = ['.jpg'];
		if (!file) {
			throw new Error('Ingresar Imagen N°3 del Producto');
		} else {
			let fileExtension =path.extname(file.originalname);

			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extension del archivo permitidas es ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})

]

module.exports = productValidations


