const express = require('express');
const router = express.Router();

const setRoutes = (app) => {
    router.get('/', (req, res) => {
        res.send('Welcome to the Node.js Server!');
    });

    // Add more routes here as needed

    app.use('/', router);
};

module.exports = setRoutes;