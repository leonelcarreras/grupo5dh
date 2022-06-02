const path = require("path");
const { validationResult } = require("express-validator");


const user = require("../models/users");
const bcryptjs = require("bcryptjs");


const userController = {



    // Registración de Usuario //

    registro: (req, res) => { res.render("registro") },

    altaUsuario: (req, res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {

            console.log(validationResult(req));

            return res.render("registro",
                {
                    errors: resultValidation.mapped(),
                    oldData: req.body

                });
        }

        let userInDb = user.userByField("email", req.body.email);


        if (userInDb) {

            return res.render("registro", {
                errors: {
                    email: {
                        msg: "Este email ya se encuentra registrado"
                    }

                },

                oldData: req.body

            });


        }




        userToCreate = {
            ...req.body,
            userProfileImage: req.file.filename,
            password: bcryptjs.hashSync(req.body.password, 10),


        }

        let userCreated = user.create(userToCreate);

        return res.redirect("/users/login");

    }
    ,


    // Logueo del Usuario

    login: (req, res) => {
        console.log(req.body);

        res.render("login")
    },

    loginProcess: (req, res) => {

        let userToLogin = user.userByField("email", req.body.email)
        // console.log(req.body.email);
        // console.log(userToLogin);

        if (userToLogin) {
            let contraseñaOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            // console.log(contraseñaOk);
            if (contraseñaOk) {

                req.session.userLogged = userToLogin;
                console.log(req.session);

                if (req.body.recordarUsuario) {
                    res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 60 })
                }

                console.log(req.bodyc);

                res.redirect("/users/userProfile")

            }

            return res.render("login",
                {
                    errors: {
                        password: {
                            msg: "Contraseña incorrecta"
                        },

                    },
                    oldData: req.body,

                })


        }
        else
            return res.render("login",
                {
                    errors: {
                        email: {
                            msg: "Usuario no registrado"
                        },
                        oldData: req.body,
                    },


                })


    },


    profile: (req, res) => {
        console.log(req.cookies.userEmail);
        res.render("UserProfile", {
            user: req.session.userLogged


        })
    },

    logout: (req, res) => {

        res.clearCookie("userEmail");
        req.session.destroy();

        return res.redirect("/")


    },

}


module.exports = userController