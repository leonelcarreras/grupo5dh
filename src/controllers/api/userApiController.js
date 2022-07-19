const path = require("path");
const fs = require('fs');

const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");


const { validationResult } = require("express-validator");
const { log } = require("console");


const Users = db.User;



module.exports = {
  list: (req,res) => {
    Users
    .findAll()
    .then(users => {
      return res.status(200).json({
        total: users.length,
        data: users,
        status:200,
        url: "api/users/"
      })
    })
  }
,
  userDetail:(req,res) => {
    Users
    .findByPk(req.params.id)
    .then(user => {
      return res.status(200).json({
        data: user,
        status:200,
        url: "api/users/detail/:id"
      })
    })}
}
