const express = require("express");
const { link } = require("fs");

const app = express()

app.use(express.static("public"));
const path = require("path")



app.listen(3004, () => {

    console.log("el servidor esta corriendo en puerto 3004");
})



    app.get("/",(req,res) =>{

        res.sendFile(path.resolve(__dirname, "./Views/home.html"))
        
        }) ;
  
    app.get("/login",(req,res) =>{

        res.sendFile(path.resolve(__dirname, "./Views/login.html"))
        
        }) ;
    


        app.get("/registro",(req,res) =>{

            res.sendFile(path.resolve(__dirname, "./Views/registro.html"))
            
            }) ;
        

            app.get("/productDetail",(req,res) =>{

                res.sendFile(path.resolve(__dirname, "./Views/productDetail.html"))
                
                }) ;


                app.get("/cart",(req,res) =>{

                    res.sendFile(path.resolve(__dirname, "./Views/cart.html"))
                    
                    }) ;

                    app.get("/altaProducto",(req,res) =>{

                        res.sendFile(path.resolve(__dirname, "./Views/altaProducto.html"))
                        
                        }) ;
    



                        
                    
        
    