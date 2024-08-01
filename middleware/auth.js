require('dotenv').config();

const apiKey = process.env.API_KEY;

const authenticate = (req, res, next) => {
    const key = req.headers['x-api-key'];
    console.log('API Key from header:', key); // Log the API key from the request header
    console.log('API Key from env:', apiKey); // Log the API key from the environment variables

    if (key && key === apiKey) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

module.exports = authenticate;