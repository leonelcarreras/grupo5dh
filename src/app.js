const express = require("express");
const session = require("express-session");
const path = require('path');
const cookies = require("cookie-parser")
    ;
const methodOverride = require('method-override');
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")

const app = express();

const cors = require("cors");
app.use(cors())


app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
}));


app.use(cookies());

app.use(userLoggedMiddleware);


app.use(express.static(path.join(__dirname, '../public')));
/* app.use(express.static(path.join(__dirname + '../Public'))); */

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(methodOverride('_method'));

app.listen(3004, () => {

    console.log("el servidor esta corriendo en puerto 3004");
})

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views'))



const rutas = require("./routes/index")
const rutasProudcto = require("./routes/products")
const rutasUsers = require("./routes/users");

app.use("/", rutas);
app.use("/products", rutasProudcto)
app.use("/users", rutasUsers)

/* RUTAS DE APIS */

const rutasApiProdcto = require("./routes/api/products");
const rutasApiUsers = require("./routes/api/users")

app.use('/api/products',rutasApiProdcto);
app.use('/api/users',rutasApiUsers);



// app.use((req, res, next) =>

// {  res.status(404).render("not-found")



// });