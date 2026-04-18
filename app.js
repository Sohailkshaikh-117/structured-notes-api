
const express = require('express');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const notesRoute = require('./routes/notesRoutes');
const authRoute = require('./routes/authRoutes');

const app = express();

const rootPath = '/';
const notesRoutePath = '/notes';
const authRoutePath = '/auth';

app.use(express.json());
app.use(logger);

app.use(authRoutePath, authRoute);

app.use(notesRoutePath, notesRoute);

app.get(rootPath, (request, response) => {
    response.send(`Express server hit using 'GET' method at path '${rootPath}'`);
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Express server is running at port 3000.')
});
