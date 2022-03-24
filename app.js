const express = require("express");
const { link } = require("fs");

const app = express()

app.use(express.static("public"));
const path = require("path")



app.listen(3004, () => {

    console.log("el servidor esta corriendo en puerto 3004");
})



        
    app.get("/Login",(req,res) =>{

        res.sendFile(path.resolve(__dirname, "./Views/Login.html"))
        
        }) ;


        app.get("/Registro",(req,res) =>{

            res.sendFile(path.resolve(__dirname, "./Views/Registro.html"))
            
            }) ;

            app.get("/productDetail",(req,res) =>{

                res.sendFile(path.resolve(__dirname, "./Views/productDetail.html"))
                
                }) ;


            app.get("/carrito",(req,res) =>{

                res.sendFile(path.resolve(__dirname, "./Views/carrito.html"))
                
                }) ;