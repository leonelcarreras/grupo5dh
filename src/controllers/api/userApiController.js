const path = require("path");
const fs = require('fs');

const DB = require('../../database/models');
const sequelize = DB.sequelize;
const { Op, where } = require("sequelize");


const { validationResult } = require("express-validator");
const { log } = require("console");


const User = DB.User;



module.exports = {
  list: (req,res) => {
    DB.User
    .findAll()
    .then(user => {
      return res.status(200).json({
        total: User.length,
        data: User,
        status:200
      })
    })
  }
}
