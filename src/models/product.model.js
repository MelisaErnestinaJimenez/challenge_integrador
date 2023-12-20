const { conn } = require('../config/conn');

const getAll = async () => {
  try {
    const [rows] = await conn.query(`
      SELECT
        product.product_id,
        product.sku,
        product.product_name,
        product.dues,
        product.price,
        product.image_front,
        product.image_back,
        category.category_name AS category_name,
        licence.licence_name AS licence_name
      FROM
        product
      LEFT JOIN
        category ON product.category_id = category.category_id
      LEFT JOIN
        licence ON product.licence_id = licence.licence_id
    `);

    return rows;
  } catch (error) {
    return {
      error: true,
      message: 'Hemos encontrado un error: ' + error
    };
  } finally {
    conn.releaseConnection();
  }
}

const getOne = async (id) => {
  try {
    const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?;', id);
    return rows;
  } catch (error) {
    return {
      error: true,
      message: 'Hemos encontrado un error: ' + error
    };
  } finally {
    conn.releaseConnection();
  }
}

module.exports = {
  getAll,
  getOne,


  addToCart: async (req, res) => {
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
},
};
