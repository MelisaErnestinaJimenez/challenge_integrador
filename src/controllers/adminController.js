// const adminController = {
//     admin: (req, res) => res.send('Route for Admin View'),
//     create: (req, res) => res.send('Route for Admin Create View'),
//     createPost: (req, res) => {

//         res.send('Route for Admin Create (POST)');
//     },
//     edit: (req, res) => res.send('Route for Admin Edit View'),
//     editPut: (req, res) => {
//         res.send('Route for Admin Edit (PUT)');
//     },
//     delete: (req, res) => res.send('Route for Admin Delete View'),
// };

// module.exports = adminController;

const path = require('path');


module.exports = {
    admin: (req, res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),{
        title: "Admin"
    }),
    createView:  (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'),{
        title: "Crear Item"
    }),
    createItem:  (req, res) => res.send('Ruta de Creación que recibe datos para agregar un nuevo ítem en la Base de Datos'),
    editView:  (req, res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),{
        title: "Editar Item"
    }),
    editItem:  (req, res) => res.send('Ruta de Edición que recibe datos para modificar un ítem en la Base de Datos'),
    deleteItem:  (req, res) => res.send('Ruta de Eliminación que recibe el ID del ítem a eliminar de la base de datos'),
};

