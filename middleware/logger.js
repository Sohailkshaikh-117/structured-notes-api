
const logger = (request, response, next) => {
    console.log('-------------Logger start-------------');
    console.log(`METHOD: ${request.method}\nURL: ${request.url}`);
    console.log('-------------Logger end-------------');
    next();
};

module.exports = logger;