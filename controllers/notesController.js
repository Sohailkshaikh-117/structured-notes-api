
const getAllNotes = (request, response) => {
    response.send('Get all notes - controller hit');
};

module.exports = {
    getAllNotes,
}