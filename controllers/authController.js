const authService = require('../services/authService');

const login = (request, response) => {
    const { username, password } = request.body;

    if (username === 'admin1' && password === 'admin123') {

        const token = authService.generateToken(username);

        response.json({
            success: true,
            token,
        });

    } else {
        response.status(401).json({
            success: false,
            message: 'Invalid credentials',
        });
    }
}

module.exports = {
    login
};