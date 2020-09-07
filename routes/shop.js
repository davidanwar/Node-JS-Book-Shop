const express = require("express");
const router = express.Router();
// const path = require("path");
// const adminData = require("./admin");
const productController = require("../controllers/product");
router.get("/", productController.getProduct);

module.exports = router;
