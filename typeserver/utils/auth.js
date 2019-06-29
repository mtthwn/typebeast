const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const userObject = {
        name: user.username,
        _id: user.id.toString(),
    }

    return token = jwt.sign(userObject, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 // 24 hour expiration 
    });
};

module.exports = {
    generateToken
}