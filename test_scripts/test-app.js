
// Load express module from node modules folder
const server = require('express');

// Express will create the server and assign to app
const app = server();

// This is a middleware
app.use((request, response, next) => {
    // response.send('Processing middleware function');
    console.log('Processing middleware function \n');
    next();
});

// This is a basic route
app.get('/', (request, response, next) => {
    // response.send('Task manager API running...');
    next();
});

app.get('/tasks/group/:id', (request, response, next) => {
    console.log('request - ', request);
    console.log('params', request.params);
    console.log('url', request.url);
    console.log('path', request.pathname);
    response.send('request processed !!!');
});

// app becomes the server reference and is listening to port 3000
app.listen(3000, () => {
    console.log('===============[ Server is running on port 3000 ]====================');
});