const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the user page')
})


router.get('/jeremy', (req, res) => {
    res.send('Jeremy Was Here');
})

module.exports = router;