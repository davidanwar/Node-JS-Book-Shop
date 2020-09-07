const express = require("express");
//const path = require("path");
const router = express.Router();
const productController = require ('../controllers/product')


// GET request
router.get("/add-product", productController.getAddProduct);

// POST request
router.post("/add-product", productController.postAddProduct);

module.exports = router;

// exports.routes = router;
// exports.products = products; // jika ingin memisahkan export
