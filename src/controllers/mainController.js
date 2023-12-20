const path = require('path');

module.exports = {
    home: (req, res) => {
        res.render('index', { title: 'HOME' });
    },
    contact: (req, res) => res.render(path.resolve(__dirname, '../views/contact.ejs'), {
        title: 'Ingresa'
    }),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faqs View'),
};
