const express = require('express');
const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/animals', require('./controllers/animals'));
app.use('/plants', require('./controllers/plants'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
