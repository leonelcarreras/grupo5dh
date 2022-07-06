const path = require("path");
const fs = require('fs');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
const moment = require('moment');
const { promisify } = require("util");

const { validationResult } = require("express-validator");
// const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));



const Marcas = db.Marca;
const Modelos = db.Modelo;
const Product_Variant = db.Product_Variant;


const productsController = {

  products: (req, res) => {
    db.Modelo.findAll({
      where: { deletedTag: 0 },
      include: ['marcas', "product_variants"],
    })
      .then(products => {
        res.render('products', { products })
      })
  },

  // products: (req, res) => { res.render("products", { products }) },

  cart: (req, res) => { res.render("cart") },

  productsByBrand: (req, res) => {

/*     console.log(req.params.marca); */
    db.Modelo.findAll({
      include: ['marcas', "product_variants"],
      where: {
        deletedTag: 0,
        '$marcas.nombre_marca$': req.params.marca
      }


    }).then(productsByBrand => {
      res.render("productsByBrand", { productsByBrand })



    })
  },

  altaProducto: (req, res) => {
    let marcas = Marcas.findAll().
      then((marcas) => {
        /* console.log(marcas); */
        return res.render('altaProducto', { marcas })
      })


  },



  create: (req, res) => {


    const resultValidation = validationResult(req);
 /*    console.log(resultValidation); */

    if (resultValidation.errors.length > 0) {
      let marcas = Marcas.findAll().then((marcas) => {
      /*   console.log(marcas); */
          return res.render('altaProducto', {marcas ,
             errors: resultValidation.mapped(),
              oldData: req.body
            });
        })
    }
    else {

      let images = req.files;

      let imagecolor1 = images[0].filename;
      let imagecolor2 = images[1].filename;
      let imagecolor3 = images[2].filename;

      Modelos.create({

        nombre: req.body.modelo,
        marca_id: req.body.marca_id,
        product_variants: {
          camaraResolucion: req.body.camaraResolucion,
          videoResolucion: req.body.videoResolucion,
          memoria: req.body.memoria,
          almacenamiento: req.body.almacenamiento,
          procesador: req.body.procesador,
          pantallaModelo: req.body.pantallaModelo,
          pantallaResolucion: req.body.pantallaResolucion,
          bateria: req.body.bateria,
          imagecolor1: imagecolor1,
          imagecolor2: imagecolor2,
          imagecolor3: imagecolor3,
          color: req.body.color,
          price: req.body.price,
        }

      }, { include: ["product_variants"] }).then(() => {
        return res.redirect('/')
      })
        .catch(error => res.send(error))
    }
  },


  editarProducto: (req, res) => {
    let marcas = Marcas.findAll();
    let product = db.Modelo.findAll(
      {
        where: { id: req.params.id },
        include: ['marcas', "product_variants"]
      })
    Promise.all([marcas, product])
      .then(([marcas, product]) => {
        res.render('editarProducto', { product, marcas });

      });

  },


  updateProduct: (req, res) => {

    const resultValidation = validationResult(req);
 /*    console.log(resultValidation); */

    if (resultValidation.errors.length > 0) {

      let marcas = Marcas.findAll();
      let product = db.Modelo.findAll(
        {
          where: { id: req.params.id },
          include: ['marcas',"product_variants"]
        })
        Promise.all([marcas, product]).then(([marcas, product]) => {
      /*   console.log(marcas); */
          return res.render('editarProducto', {marcas ,product,
             errors: resultValidation.mapped(),
              oldData: req.body
            });
        })
    }
    else {

    let productToEdit = req.params.id;
console.log(productToEdit);
    let images = req.files;

    let imagecolor1 = images[0].filename;
    let imagecolor2 = images[1].filename;
    let imagecolor3 = images[2].filename;

    Modelos.update({

      nombre: req.body.modelo,
      marca_id: req.body.marca_id,
      product_variants:{
        camaraResolucion: req.body.camaraResolucion,
        videoResolucion: req.body.videoResolucion,
        memoria: req.body.memoria,
        almacenamiento: req.body.almacenamiento,
        procesador: req.body.procesador,
        pantallaModelo: req.body.pantallaModelo,
        pantallaResolucion: req.body.pantallaResolucion,
        bateria: req.body.bateria,
        imagecolor1: imagecolor1,
        imagecolor2: imagecolor2,
        imagecolor3: imagecolor3,
        color: req.body.color,
        price: req.body.price,
      }

    }, {
      include:["product_variants"], where: {
        id: productToEdit
      }
    }).then(() => {
      return res.redirect('/')
    })
      .catch(error => res.send(error))}
  },





  // Detalle del Producto //

  productDetail: (req, res) => {

    db.Modelo.findByPk(req.params.id,
      {
        include: ['marcas', "product_variants"]
      })
      .then(product => {
        res.render('productDetail.ejs', { product });

      });

  },

  // Soft Delete - borrar un producto//

  destroy: (req, res) => {

    let productToEdit = req.params.id;

    Modelos.update({
      deletedTag: 1
    },

      {
        where: {
          id: productToEdit
        }
      }
    ).then(() => {
      res.redirect('http://localhost:3004/products')
/*       console.log(productToEdit); */
    })
  },

};



module.exports = productsController