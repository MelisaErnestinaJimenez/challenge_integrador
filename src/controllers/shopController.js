const path = require('path');
const { title } = require('process');

module.exports = {
  shop: (req, res) => {
    res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
    title: "Tienda",

  });
  },
  item: (req, res) => {
    res.render(path.resolve(__dirname, '../views/shop/item.ejs'),{
      title: "item"
    });
  },
  addItem: (req, res) => {
   res.send('Route for Add the current item to the shop cart');
  },

  cart: (req,res) => {
  res.send('Route for cart View');
  },
  addToCart: (req,res) => {
   res.send('Route for got to checkout page');
  },
  };
