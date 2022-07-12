const path = require("path");
const { validationResult } = require("express-validator");


const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
const moment = require('moment');
const { promisify } = require("util");


const Users = db.User;

// const user = require("../database/models/Users");
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


        // let userInDb = user.userByField("email", req.body.email);

        let userInDb = (db.User.findAll({ where: { email: req.body.email } })).then(userInDb => {

            console.log(userInDb);
            if (userInDb.length > 0) {

                return res.render("registro", {
                    errors: {
                        email: {
                            msg: "Este email ya se encuentra registrado"
                        }

                    },

                    oldData: req.body

                });


            }


            db.User.create({
                ...req.body,
                userProfileImage: req.file.filename,
                password: bcryptjs.hashSync(req.body.password, 10),

            })

            // userToCreate = {
            //     ...req.body,
            //     userProfileImage: req.file.filename,
            //     password: bcryptjs.hashSync(req.body.password, 10),


            // }

            // let userCreated = user.create(userToCreate);

            return res.redirect("/users/login");
        })

    }
    ,


    // Logueo del Usuario

    login: (req, res) => {

        res.render("login")
    },

    loginProcess: (req, res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {

            console.log(validationResult(req));

            return res.render("login",
                {
                    errors: resultValidation.mapped(),
                    oldData: req.body

                });
        }

        let userToLogin = (db.User.findOne({ where: { email: req.body.email } })).then(userToLogin => {
            console.log(req.body.email);
            console.log(userToLogin);


        
           /*  console.log(userToLogin.dataValues.password) */
            if (userToLogin) {
                let contraseñaOk = bcryptjs.compareSync(req.body.password, userToLogin.dataValues.password)
                console.log(bcryptjs.compareSync(req.body.password, userToLogin.dataValues.password));
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

        });



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