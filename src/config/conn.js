const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'funkoshop',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  pool.getConnection((error, connection) => {
    if (error) {
      console.error('Error al obtener una conexión:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
      connection.release();
    }
  });

  module.exports = {
    conn: pool.promise()
  };