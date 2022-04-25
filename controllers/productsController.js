const path = require("path");
const fs = require('fs');


const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {

home: (req,res) => {res.render("home")},

altaProducto: (req,res) => {res.render("altaProducto")},

store: (req, res) => {
    let id = products[products.length - 1].id + 1;

let image = req.file.filename ; 

    let newProduct = {
       id,
       ...req.body,
       image,
       
     };
     console.log(newProduct);
    
    
     products.push(newProduct);
     fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");
 
     res.redirect("/");
},



editarProducto: (req,res) => {res.render("editarProducto")},

edit: (req, res) => {

    let productId = req.params.id
let productToEdit = products.filter((p) => p.id == productId )

    res.render("editarProducto", {productToEdit})
},

cart: (req,res) => {res.render("cart")},


// Detalle del Producto //

productDetail: (req,res) => {
    
    let id = req.params.id
    let productDetail = products.filter((p) => p.id == id )
    
    res.render("productDetail", {productDetail})
},

// Delete - borrar un producto//

destroy:(req,res)=> {
    const productId =Number (req.params.id);
    const finalProducts = products.filter ((p) =>p.id != productId);
    
    fs.writeFileSync(productsFilePath, JSON.stringify (finalProducts), "utf-8");
    res.redirect("/http://localhost:3004/products/");
},

};



module.exports = productsController