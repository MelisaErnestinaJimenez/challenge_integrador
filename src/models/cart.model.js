// cart.model.js

const { conn } = require('../config/conn');

const addToCart = async (userId, productId, quantity) => {
  try {
    const [rows] = await conn.query('INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?);', [userId, productId, quantity]);

    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos agregar el producto al carrito: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const getCartItems = async (userId) => {
  // Implementa la lógica para obtener los productos en el carrito del usuario
};



module.exports = {
  addToCart,
  getCartItems
  // Agrega más funciones según tus necesidades
};
