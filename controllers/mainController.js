const path = require("path");

const mainController = {

home: (req,res) => {res.render("home")},
altaProducto: (req,res) => {res.render("altaProducto")},
cart: (req,res) => {res.render("cart")},
login: (req,res) => {res.render("login")},
registro: (req,res) => {res.render("registro")},
create: (req,res) => {
    
    let registro = {
    email: req.body.nombreUsuario ,
    password: req.body.password,
    cPassword: req.body.cPassword,
    domicilio: req.body.domicilio,
    nacimiento: req.body.fechaNac}
    
    res.send ( registro ) }

,

productDetail: (req,res) => {res.render("productDetail")},

    

}


module.exports = mainController