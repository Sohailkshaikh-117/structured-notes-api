const server = require('express');

const app = server();

app.use((request, response, next) => {
    console.log('this is middleware 1');
    next();
});

app.use((request, reponse, next) => {
    console.log('this is middleware 2');
    next();
});

app.get('/', (request, response) => {
    response.send('request received !!');
});

app.listen(3000, () => {
    console.log('test server is listening at port 3000');
});