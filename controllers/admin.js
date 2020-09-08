const Product = require("../models/product");
//const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  //products.push({ title: req.body.title }); jika tanpa MVC
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (res, req, next) => {
    const products = Product.fetchAll((products) => {
        res.render("admin/products", {
          prods: products,
          pageTitle: "Admin Products",
          path: "/",
        });
      });
}
