const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../services/authService');

const authenticate = (request, response, next) => {
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
        return response.status(401).json({
            success: false,
            message: 'No token provided'
        });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if (error) {
            return response.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }

        request.user = decoded;
        next();
    });

};

module.exports = authenticate;