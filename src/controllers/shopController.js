const path = require('path');

const { title } = require('process');

const { getAll, getOne } = require('../models/product.model');

const { addToCart } = require('../models/cart.model');


let cart = [];

// const json= [
//   {
//   product_id: 1,
//   licence_name: "Pokemon",
//   category_name: "Figuras coleccionables",
//   product_name: "Pidgeotto",
//   product_description: "Figura coleccionable pokemon",
//   price: 1799.99,
//   dues: 10,
//   product_sku: "PKM001001",
//   img_front: "/img/pokemon/pidgeotto-1.webp",
//   img_back: "/img/pokemon/pidgeotto-box.webp"
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pikachu",
//     product_description: "Figura coleccionable pokemon",
//     price: 1799.99,
//     dues: 6,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pikachu-1.webp",
//     img_back: "/img/pokemon/pikachu-box.webp"
//     },
//     {
//       product_id: 1,
//       licence_name: "Pokemon",
//       category_name: "Figuras coleccionables",
//       product_name: "Charmander",
//       product_description: "Figura coleccionable pokemon",
//       price: 1799.99,
//       dues: 10,
//       product_sku: "PKM001001",
//       img_front: "/img/pokemon/charmander-1.webp",
//       img_back: "/img/pokemon/charmander-box.webp"
//       },
//       {
//         product_id: 1,
//         licence_name: "Harry Potter",
//         category_name: "Figuras coleccionables",
//         product_name: "Harry Potter",
//         product_description: "Figura coleccionable Harry Potter",
//         price: 1799.99,
//         dues: 11,
//         product_sku: "PKM001001",
//         img_front: "/img/harry-potter/harry-1.webp",
//         img_back: "/img/harry-potter/harry-box.webp"
//         },
//         {
//           product_id: 1,
//           licence_name: "Harry Potter",
//           category_name: "Figuras coleccionables",
//           product_name: "Luna Lovegood Lion Mask",
//           product_description: "Figura coleccionable Harry Potter",
//          price: 1799.99,
//           dues: 10,
//           product_sku: "PKM001001",
//           img_front: "/img/harry-potter/luna-1.webp",
//           img_back: "/img/harry-potter/luna-box.webp"
//           },
//           {
//             product_id: 1,
//             licence_name: "Harry Potter",
//             category_name: "Figuras coleccionables",
//             product_name: "Hermione",
//             product_description: "Figura coleccionable Harry Potter",
//             price: 1799.99,
//             dues: 10,
//             product_sku: "PKM001001",
//             img_front: "/img/harry-potter/hermione-1.webp",
//             img_back: "/img/harry-potter/hermione-box.webp"
//             },
//             {
//               product_id: 1,
//               licence_name: "Star Wars",
//               category_name: "Figuras coleccionables",
//               product_name: "Baby Yoda",
//               product_description: "Figura coleccionable pokemon",
//               price: 1799.99,
//               dues: 10,
//               product_sku: "PKM001001",
//               img_front: "/img/star-wars/baby-yoda-1.webp",
//               img_back: "/img/star-wars/baby-yoda-box.webp"
//               },
//               {
//                 product_id: 1,
//                 licence_name: "Star Wars",
//                 category_name: "Figuras coleccionables",
//                 product_name: "Bobba Fett",
//                 product_description: "Figura coleccionable pokemon",
//                 price: 1799.99,
//                 dues: 10,
//                 product_sku: "PKM001001",
//                 img_front: "/img/star-wars/bobbafeth-1.webp",
//                 img_back: "/img/star-wars/bobbafeth-box.webp"
//                 },
//                 {
//                   product_id: 1,
//                   licence_name: "Star Wars",
//                   category_name: "Figuras coleccionables",
//                   product_name: "Stormtrooper",
//                   product_description: "Figura coleccionable pokemon",
//                   price: 1799.99,
//                   dues: 10,
//                   product_sku: "PKM001001",
//                   img_front: "/img/star-wars/trooper-1.webp",
//                   img_back: "/img/star-wars/trooper-box.webp"
//                   },
                                                                          
//   ]

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

  cart: (req, res) => {
    res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
      title: "Cart",
      cart: cart
    });
  },

  addToCart: async (req, res) => {
    try {
        const itemId = req.params.id;

        // Busca el producto en la base de datos
        const productFromDB = await getOne(itemId);

        if (productFromDB.length > 0) {
            // Busca el producto en el carrito
            const itemInCart = cart.find(item => item.product_id === Number(itemId));

            if (itemInCart) {
                // Si el producto ya está en el carrito, puedes actualizar la cantidad o realizar alguna otra acción.
                // Por ahora, simplemente redirigimos al carrito.
                res.redirect('/shop/cart');
            } else {
                // Si el producto no está en el carrito, agrégalo.
                cart.push(productFromDB[0]); // Usamos productFromDB[0] ya que getOne devuelve un array
                res.redirect('/shop/cart');
            }
        } else {
            res.send('Item not found in the database');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
},

};




