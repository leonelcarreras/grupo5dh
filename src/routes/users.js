const express = require("express");
const router = express.Router();
const path = require("path")
const { body } = require("express-validator")



const userController = require("../controllers/userController");

const validations = require("../middlewares/registrovalidator")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

const multer = require("multer");
const storage = multer.diskStorage ({
    destination: function(req, file, cb) {

        let folder = path.join(__dirname ,"../../Public/images/usersProfileImage")
console.log(file);
        cb(null,folder);

    },

    filename: function(req, file, cb){
  const fileName = Date.now()+ "-" + file.originalname  ;
        cb(null, fileName);
        console.log(fileName); },

        
});


const upload = multer ({storage});


router.get("/registro", guestMiddleware, userController.registro);
router.post("/registro",upload.single("userProfileImage"),validations,userController.altaUsuario);
router.get("/login", guestMiddleware, userController.login);
router.post("/login", userController.loginProcess);
router.get("/userProfile", authMiddleware, userController.profile);
router.get("/logout", userController.logout);
module.exports = router


