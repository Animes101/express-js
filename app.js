const express = require('express');
const app = express();

const contactRoute = require('./routes/contact.route');

// JSON middleware (যদি JSON ডাটা পাঠাও)
app.use(express.json());

// Route middleware
app.use('/api', contactRoute);

module.exports = app;
