const express = require("express");
//const path = require("path");
const router = express.Router();
const adminController = require ('../controllers/admin')


// GET request admin
router.get("/add-product", adminController.getAddProduct);

// POST request
router.post("/add-product", adminController.postAddProduct);

router.post("/add-product", adminController.postAddProduct);

module.exports = router;

// exports.routes = router;
// exports.products = products; // jika ingin memisahkan export
