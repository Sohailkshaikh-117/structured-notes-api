const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

const notesRoutePath = '/';

router.get(notesRoutePath, notesController.getAllNotes);

module.exports = router;