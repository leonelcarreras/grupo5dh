const path = require("path");
const fs = require('fs');


const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {


altaProducto: (req,res) => {res.render("altaProducto")},

editarProducto: (req,res) => {res.render("editarProducto")},

cart: (req,res) => {res.render("cart")},


// Detalle del Producto //

productDetail: (req,res) => {
    
    let id = req.params.id
    let productDetail = products.filter((p) => p.id == id )
    
    res.render("productDetail", {productDetail})
}


}



module.exports = productsController