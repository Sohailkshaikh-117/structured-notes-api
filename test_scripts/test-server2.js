console.log('simple log');

const http = require('http');

const myServer = http.createServer((request, response) => {

    console.log('Request header', request.headers);

    console.log('Request url', request.url);

    const url = new URL(`https://localhost${request.url}`);

    console.log('\n Request URL path', url.pathname);
    console.log('\n Request URL params', url.searchParams);

    console.log('param1 = ', url.get);
    console.log('param1 = ');
    console.log('param1 = ');

    let requestBody = '';

    request.on('data', dataChunk => {
        requestBody += dataChunk;
    });

    request.on('end', () => {
        console.log('requestBody Received here', requestBody);
        response.write('This is response write\n');
        response.write(requestBody);
        response.end('\nThis is response end');
    });
});

myServer.listen(3000, () => {
    console.log('\n=============================================================\nServer 2 is starting at port 3000\n=============================================================\n');
});