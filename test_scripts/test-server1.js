const http = require('http');

const server = http.createServer((request, response) => {

    // switch (request.method) {
    //     case 'GET': response.end('This is a GET request'); break;
    //     case 'POST': response.end('This is a POST request'); break;
    //     default: response.end('This is an UNKNOWN request'); break;
    // }

    console.log('\n\n\n#######################--REQUEST INITIATED--#########################\n\n');

    console.log('\n==========REQUEST INFORMATION============================================\n');
    console.log('Method: ', request.method);
    console.log('url', request.url);
    console.log('headers', request.headers);

    console.log('\n==========URL INFORMATION============================================\n');
    const url = new URL(request.url, `http://${request.headers.host}`);
    console.log('url.pathname', url.pathname);
    console.log('url.searchParams', url.searchParams);
    url.searchParams.forEach(param => console.log('param = ', param));

    switch (request.url) {
        case '/': console.log('Requesting Root: ', request.url); break;
        case '/favicon.ico': console.log('Requesting Favicon: ', request.url); break;
        default: console.log('Specified Path Not Found: \n', request.url); break;
    }

    console.log('\n==========BODY INFORMATION============================================\n');
    response.write('Parsing in progress...'.repeat(5000));
    let bodyStream = '';
    request.on('data', dataByte => bodyStream += dataByte);
    console.log('bodyStream: ', bodyStream);
    request.on('end', () => {
        // console('endEventParam: ', endEventParam);
        console.log('bodyStream inside end event: ', bodyStream);
        let bodyInJson = '';
        try {
            bodyInJson = JSON.parse(bodyStream);
        } catch (e) {
            console.log('error in parsing', e);
            bodyInJson = null;
        }
        console.log('bodyInJson:', bodyInJson);
        setTimeout(() => {
            response.end('This is the end of Request');
        }, 50000);
    });
});

server.listen(3000, () => {
    console.log('server is running at port 3000');
});
