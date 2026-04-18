
const express = require('express');
const notesRoute = require('./routes/notesRoutes');

const app = express();

const rootPath = '/';
const notesRoutePath = '/notes';

app.use(notesRoutePath, notesRoute);

app.get(rootPath, (request, response) => {
    response.send(`Express server hit using 'GET' method at path '${rootPath}'`);
});

app.listen(3000, () => {
    console.log('Express server is running at port 3000.')
});
