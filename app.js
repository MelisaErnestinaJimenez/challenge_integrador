// app.js
const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes'); 
const authRoutes = require('./src/routes/authRoutes'); 
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('method_'));

// app.get('/home', (req, res) => res.sendFile(__dirname + '/public/index.html'));
// app.get('/ping', (req, res) => res.send('pong'));


app.get('/home', (req, res) => res.render('index'));
app.get('/ping', (req, res) => res.send('pong'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes); 
app.use('/auth', authRoutes); 

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));
