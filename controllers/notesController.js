
const notesService = require('../services/notesService');

const getAllNotes = (request, response) => {
    const allNotes = notesService.getAllNotes();
    response.json(allNotes);
};

module.exports = {
    getAllNotes,
}