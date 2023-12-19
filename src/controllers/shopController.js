const path = require('path');

const { title } = require('process');

const { getAll } = require('../models/product.model');

const json= [
  {
  product_id: 1,
  licence_name: "Pokemon",
  category_name: "Figuras coleccionables",
  product_name: "Pidgeotto",
  product_description: "Figura coleccionable pokemon",
  product_price: 1799.99,
  dues: 10,
  product_sku: "PKM001001",
  img_front: "/img/pokemon/pidgeotto-1.webp",
  img_back: "/img/pokemon/pidgeotto-box.webp"
  },
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pikachu",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 6,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pikachu-1.webp",
    img_back: "/img/pokemon/pikachu-box.webp"
    },
    {
      product_id: 1,
      licence_name: "Pokemon",
      category_name: "Figuras coleccionables",
      product_name: "Charmander",
      product_description: "Figura coleccionable pokemon",
      product_price: 1799.99,
      dues: 10,
      product_sku: "PKM001001",
      img_front: "/img/pokemon/charmander-1.webp",
      img_back: "/img/pokemon/charmander-box.webp"
      },
      {
        product_id: 1,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp"
        },
        {
          product_id: 1,
          licence_name: "Pokemon",
          category_name: "Figuras coleccionables",
          product_name: "Pidgeotto",
          product_description: "Figura coleccionable pokemon",
          product_price: 1799.99,
          dues: 10,
          product_sku: "PKM001001",
          img_front: "/img/pokemon/pidgeotto-1.webp",
          img_back: "/img/pokemon/pidgeotto-box.webp"
          },
          {
            product_id: 1,
            licence_name: "Pokemon",
            category_name: "Figuras coleccionables",
            product_name: "Pidgeotto",
            product_description: "Figura coleccionable pokemon",
            product_price: 1799.99,
            dues: 10,
            product_sku: "PKM001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp"
            },
            {
              product_id: 1,
              licence_name: "Pokemon",
              category_name: "Figuras coleccionables",
              product_name: "Pidgeotto",
              product_description: "Figura coleccionable pokemon",
              product_price: 1799.99,
              dues: 10,
              product_sku: "PKM001001",
              img_front: "/img/pokemon/pidgeotto-1.webp",
              img_back: "/img/pokemon/pidgeotto-box.webp"
              },
              {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura coleccionable pokemon",
                product_price: 1799.99,
                dues: 10,
                product_sku: "PKM001001",
                img_front: "/img/pokemon/pidgeotto-1.webp",
                img_back: "/img/pokemon/pidgeotto-box.webp"
                },
                {
                  product_id: 1,
                  licence_name: "Pokemon",
                  category_name: "Figuras coleccionables",
                  product_name: "Pidgeotto",
                  product_description: "Figura coleccionable pokemon",
                  product_price: 1799.99,
                  dues: 10,
                  product_sku: "PKM001001",
                  img_front: "/img/pokemon/pidgeotto-1.webp",
                  img_back: "/img/pokemon/pidgeotto-box.webp"
                  },
                                                                          
  ]

module.exports = {
  shop: async (req, res) => {

  const data = await getAll ();

 
  res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
    title: "Tienda",
     data 
  });
 
 
    

   
  },

  item: (req, res) => {
   const itemId = req.params.id;
   const  item = json.find(item => item.product_id == itemId);

    res.render(path.resolve(__dirname, '../views/shop/item.ejs'),{
      title: "Item",
      item: item
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
