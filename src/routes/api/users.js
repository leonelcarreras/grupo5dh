const express = require("express");
const router = express.Router();
const path = require("path")

const userApiController = require("../../controllers/api/userApiController");

router.get("/", userApiController.list);
router.get("/detail/:id", userApiController.userDetail);

module.exports = router;  