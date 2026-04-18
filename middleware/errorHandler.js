
const errorHandler = (error, request, response, next) => {
    console.error(`ERROR: ${error.message}`);
    response.status(500).json({
        success: false,
        message: error.message || 'Internal server error',
    });
};

module.exports = errorHandler;