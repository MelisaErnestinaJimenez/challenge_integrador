const adminController = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for Admin Create View'),
    createPost: (req, res) => {

        res.send('Route for Admin Create (POST)');
    },
    edit: (req, res) => res.send('Route for Admin Edit View'),
    editPut: (req, res) => {
        res.send('Route for Admin Edit (PUT)');
    },
    delete: (req, res) => res.send('Route for Admin Delete View'),
};

module.exports = adminController;
