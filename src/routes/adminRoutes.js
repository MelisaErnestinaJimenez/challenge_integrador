// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const {admin, createView, createItem, editView, editItem, deleteItem} = require('../controllers/adminController');

router.get('/', adminController.admin);
router.get('/create', adminController.createView);
router.post('/create', adminController.createItem);
router.get('/edit/:id', adminController.editView);
router.put('/edit/:id', adminController.editItem);
router.delete('/delete/:id', adminController.deleteItem);

module.exports = router;
