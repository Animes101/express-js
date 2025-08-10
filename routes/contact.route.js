const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
    res.send('POST request');
});

router.get('/contact', (req, res) => {
    res.send('GET request');
});

router.put('/contact', (req, res) => {
    res.send('PUT request');
});

router.delete('/contact', (req, res) => {
    res.send('DELETE request');
});

module.exports = router;
