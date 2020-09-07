const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
    });
  }

exports.postAddProduct = (req, res) => {
    //products.push({ title: req.body.title }); jika tanpa MVC
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
  }

exports.getProduct = (req, res, next) => {
  //const products = adminData.products; jika tanpa MVC
  const products = Product.fetchAll();
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  }