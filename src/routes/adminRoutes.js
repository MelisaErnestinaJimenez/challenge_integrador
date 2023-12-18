// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.admin);
router.get('/create', adminController.create);
router.post('/create', adminController.createPost);
router.get('/edit/:id', adminController.edit);
router.put('/edit/:id', adminController.editPut);
router.delete('/delete/:id', adminController.delete);

module.exports = router;
