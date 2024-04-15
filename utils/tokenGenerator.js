const jwt = require("jsonwebtoken");
JWT_SECRET = process.env.JWT_SECRET;
JWT_ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY;
JWT_REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY;

function generateAccessToken(user) {
    //  Add the specific required user dict to avoid sending extra user data.
    // user = {}
    return jwt.sign({ user }, JWT_SECRET, {
        expiresIn: JWT_ACCESS_EXPIRY,
    });
}

function generateRefreshToken(user) {
    //  Add the specific required user dict to avoid sending extra user data.
    // user = {}
    return jwt.sign({ user }, JWT_SECRET, {
        expiresIn: JWT_REFRESH_EXPIRY,
    });
}

module.exports = { generateAccessToken, generateRefreshToken };
