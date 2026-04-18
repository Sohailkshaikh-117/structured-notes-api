const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const authenticate = require('../middleware/authenticate');

const notesRoutePath = '/';

router.get(notesRoutePath, authenticate, notesController.getAllNotes);

module.exports = router;