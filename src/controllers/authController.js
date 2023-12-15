// const authController = {
//     login: (req, res) => res.send('Route for Login View'),
//     loginPost: (req, res) => {

//         res.send('Route for Login (POST)');
//     },
//     register: (req, res) => res.send('Route for Register View'),
//     registerPost: (req, res) => {
 
//         res.send('Route for Register (POST)');
//     },
//     logout: (req, res) => res.send('Route for Logout View'),
// };

// module.exports = authController;

const path = require('path');

module.exports = {
    login:  (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs'),{
        title: "Ingresa"
    }),
doLogin:  (req, res) => res.render('ruta que valida los datos de LOGIN'),
register: (req, res) => res.render(path.resolve(__dirname, '../views/auth/register.ejs'),{
    title:"Registro"
}),
doRegister: (req, res) => res.render('Crea nuevo usuario'),
logout: (req, res) => res.render('Cierra sesión'),
}