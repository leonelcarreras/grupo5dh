const path = require("path");

const mainController = {

home: (req,res) => {res.render("home")},
altaProducto: (req,res) => {res.render("altaProducto")},
editarProducto: (req,res) => {res.render("editarProducto")},

login: (req,res) => {res.render("login")},
registro: (req,res) => {res.render("registro")},
 

productDetail: (req,res) => {res.render("productDetail")},

cart: (req,res) => {res.render("cart")},      

}


module.exports = mainController