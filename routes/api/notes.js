const express = require("express");
const router = express.Router();
const notesController = require("../../controllers/api/notes");
const ensureLoggedIn = require("../../config/ensureLoggedIn")

//All paths start with '/api/notes'

router.get('/', ensureLoggedIn, notesController.index);
router.post('/', ensureLoggedIn, notesController.create);
router.delete('/:id', ensureLoggedIn, notesController.delete);

module.exports = router;