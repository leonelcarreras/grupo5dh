const express = require("express");



const app = express()

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

app.use(express.json());
                


app.listen(3004, () => {

    console.log("el servidor esta corriendo en puerto 3004");
})

app.set("view engine","ejs")




const rutas = require("./routes/index")

    app.use("/",rutas); 
    app.use("/login",rutas); 
    app.use("/registro",rutas); 
    app.use("/cart",rutas); 
    app.use("/productDetail",rutas); 
    app.use("/altaProducto",rutas); 
        

  

                    
        
    