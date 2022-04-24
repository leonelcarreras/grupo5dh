const express = require("express");

const path = require('path');

const app = express()

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

app.use(express.json());
                


app.listen(3004, () => {

    console.log("el servidor esta corriendo en puerto 3004");
})

app.set("view engine","ejs")




const rutas = require("./routes/index")
const rutasProudcto = require("./routes/products")

app.use("/",rutas); 
app.use("/",rutasProudcto)

                    
        
    
// app.use((req, res, next) =>

// {  res.status(404).render("not-found")



// });