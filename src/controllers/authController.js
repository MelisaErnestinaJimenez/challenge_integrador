const authController = {
    login: (req, res) => res.send('Route for Login View'),
    loginPost: (req, res) => {

        res.send('Route for Login (POST)');
    },
    register: (req, res) => res.send('Route for Register View'),
    registerPost: (req, res) => {
 
        res.send('Route for Register (POST)');
    },
    logout: (req, res) => res.send('Route for Logout View'),
};

module.exports = authController;
