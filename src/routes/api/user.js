const express = require("express");
const router = express.Router();
const path = require("path")

const userApiController = require("../../controllers/api/userApiController");

router.get("/", userApiController.User);

module.exports = router;  