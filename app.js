const express = require('express');
const app = express();
const port = 7000;
// Import routes from route.js
const routes = require('./route');
// Use the routes
app.use('/', routes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
});