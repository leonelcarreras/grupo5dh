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

let images = req.files ; 
let imagecolor1 = images[0].filename;
let imagecolor2 = images[1].filename;
let imagecolor3 = images[2].filename ;  

    let newProduct = {
       id,
       ...req.body,
       imagecolor1,
       imagecolor2,
       imagecolor3,
     };
     console.log(newProduct);
    
     products.push(newProduct);
     fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");
 
     res.redirect("/");
},



editarProducto: (req,res) => {
    let id = req.params.id
    let productToEdit = products.filter((p) => p.id == id )
    
    res.render("editarProducto" ,{productToEdit})},


updateProduct: (req, res) => {
    const id = Number(req.params.id);
    let productToEdit = products.find((p) => p.id === Number(id));

    // let image = "default-image.png";
    // console.log(req.file);
    // if (req.file) {
    //   image = req.file.filename;
    // }

    productToEdit = {
      ...req.body,
      id: id,
    //   image,
    };

    const updatedProduct = products.map((p) => {
      if (p.id === productToEdit.id) {
        return (p = { ...productToEdit });
      }
      return p;
    });

    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(updatedProduct),
      "utf-8"
    );

    res.redirect("/");
  },



cart: (req,res) => {res.render("cart")},


// Detalle del Producto //

productDetail: (req,res) => {
    
    let id = req.params.id
    let productDetail = products.filter((p) => p.id == id )
    
    res.render("productDetail", {productDetail})
},

// Delete - borrar un producto//

destroy: (req, res) => {
    const productId = Number(req.params.id);
    const finalProducts = products.filter ((p) =>p.id != productId);
    
    fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts), "utf-8");
    res.redirect("/");
},

};



module.exports = productsController