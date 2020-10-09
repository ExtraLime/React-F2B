const express = require('express');
const router = express.Router();


// @route GET api/auth
// @desc  GET logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('get a logged in user');
});

// @route POST api/auth
// @desc  get token + log in user
// @access  Public
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;