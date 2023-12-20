const path = require('path');

const { title } = require('process');

const { getAll, getOne } = require('../models/product.model');

const json= [
  {
  product_id: 1,
  licence_name: "Pokemon",
  category_name: "Figuras coleccionables",
  product_name: "Pidgeotto",
  product_description: "Figura coleccionable pokemon",
  price: 1799.99,
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
    price: 1799.99,
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
      price: 1799.99,
      dues: 10,
      product_sku: "PKM001001",
      img_front: "/img/pokemon/charmander-1.webp",
      img_back: "/img/pokemon/charmander-box.webp"
      },
      {
        product_id: 1,
        licence_name: "Harry Potter",
        category_name: "Figuras coleccionables",
        product_name: "Harry Potter",
        product_description: "Figura coleccionable Harry Potter",
        price: 1799.99,
        dues: 11,
        product_sku: "PKM001001",
        img_front: "/img/harry-potter/harry-1.webp",
        img_back: "/img/harry-potter/harry-box.webp"
        },
        {
          product_id: 1,
          licence_name: "Harry Potter",
          category_name: "Figuras coleccionables",
          product_name: "Luna Lovegood Lion Mask",
          product_description: "Figura coleccionable Harry Potter",
         price: 1799.99,
          dues: 10,
          product_sku: "PKM001001",
          img_front: "/img/harry-potter/luna-1.webp",
          img_back: "/img/harry-potter/luna-box.webp"
          },
          {
            product_id: 1,
            licence_name: "Harry Potter",
            category_name: "Figuras coleccionables",
            product_name: "Hermione",
            product_description: "Figura coleccionable Harry Potter",
            price: 1799.99,
            dues: 10,
            product_sku: "PKM001001",
            img_front: "/img/harry-potter/hermione-1.webp",
            img_back: "/img/harry-potter/hermione-box.webp"
            },
            {
              product_id: 1,
              licence_name: "Star Wars",
              category_name: "Figuras coleccionables",
              product_name: "Baby Yoda",
              product_description: "Figura coleccionable pokemon",
              price: 1799.99,
              dues: 10,
              product_sku: "PKM001001",
              img_front: "/img/star-wars/baby-yoda-1.webp",
              img_back: "/img/star-wars/baby-yoda-box.webp"
              },
              {
                product_id: 1,
                licence_name: "Star Wars",
                category_name: "Figuras coleccionables",
                product_name: "Bobba Fett",
                product_description: "Figura coleccionable pokemon",
                price: 1799.99,
                dues: 10,
                product_sku: "PKM001001",
                img_front: "/img/star-wars/bobbafeth-1.webp",
                img_back: "/img/star-wars/bobbafeth-box.webp"
                },
                {
                  product_id: 1,
                  licence_name: "Star Wars",
                  category_name: "Figuras coleccionables",
                  product_name: "Stormtrooper",
                  product_description: "Figura coleccionable pokemon",
                  price: 1799.99,
                  dues: 10,
                  product_sku: "PKM001001",
                  img_front: "/img/star-wars/trooper-1.webp",
                  img_back: "/img/star-wars/trooper-box.webp"
                  },
                                                                          
  ]

module.exports = {
  shop: async (req, res) => {

  const data = await getAll();


 
  res.render(path.resolve(__dirname, '../views/shop/shop.ejs'),{
    title: "Tienda",
     data 
  });
 
 
    

   
  },

  item: async (req, res) => {
   const itemId = req.params.id;

   const [item] = await getOne(itemId);

   console.log(item);

    res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
      title: "Item",
      item: item
    });
  },
  addItem: (req, res) => {
   res.send('Route for Add the current item to the shop cart');
  },

  cart: (req,res) => {
    res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
      title:"Cart"
    });
  },
  addToCart: (req,res) => {
   res.send('Route for got to checkout page');
  },
  };





