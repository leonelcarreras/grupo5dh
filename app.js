const express = require("express");
const path = require('path');

 const methodOverride = require('method-override')

const app = express()


app.use(express.static(path.join(__dirname,'/Public')));

app.use(express.urlencoded({extended:false}));

app.use(express.json());
                
app.use(methodOverride('_method'));

app.listen(3004, () => {

    console.log("el servidor esta corriendo en puerto 3004");
})

app.set("view engine","ejs")
app.set('views', path.join(__dirname, '/views'))



const rutas = require("./routes/index")
const rutasProudcto = require("./routes/products")

app.use("/",rutas); 
app.use("/products",rutasProudcto)

                    
        
    
// app.use((req, res, next) =>

// {  res.status(404).render("not-found")



// });