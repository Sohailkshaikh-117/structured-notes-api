
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret_random_key_123';

const generateToken = (username) => {
    return jwt.sign(
        { username },
        JWT_SECRET,
        { expiresIn: '1h' }
    )
};

module.exports = {
    generateToken,
    JWT_SECRET
}