const express = require('express');
const { searchItems, getItemDetails } = require('../api/itemsController');
const router = express.Router();

router.get('/', searchItems);       // Ruta para buscar items
router.get('/:id', getItemDetails); // Ruta para detalles de un item

module.exports = router;
