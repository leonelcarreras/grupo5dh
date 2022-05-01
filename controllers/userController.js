const req = require("express/lib/request");

const User = require('../models/User');

const controller = {
    register: (req, res) => {
        res.cookie('Llama', 'que Llama', {maxAge: 1000 * 30})
        return res.render ('userRegisterForm');
            },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('userRegisterForm', {
                errors: resultValidation.mapped(),
                oldData : req.body
            });
            }

            User.create(req.body);
return res.send('Su usuario ha sido registrado');
},

login (req, res) => {
    console.log(req.cookies.llama); 
    return res.render('userLoginForm');
   
},

loginProcess: (req, res) => {
let userToLogin = user.findByField('email', req.body.email)
if (userToLogin) {
    }
    return res.render('userLoginform', ){
        errors: {
            email:{
                msg: 'El mail no se encuentra en la base de datos'
            }
        }
    }
},


profile: (req, res) => {
    return res.render('userProfile');
}
logout: (req, res) =>{
    res.clearCookie('userEmail'); 
    req.session.destroy();
    return res.redirect('/')
}
}