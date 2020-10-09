const express = require('express');
const router = express.Router();


// @route GET api/contacts
// @desc  get user's contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('get all contacts');
});

// @route POST api/contacts
// @desc  Add new user contact
// @access  Private
router.post('/', (req, res) => {
    res.send('add contact');
});

// @route POST api/contacts/:id
// @desc  Add new user contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('update contact');
});

// @route DELETE api/contacts/:id
// @desc  Add new user contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('delete contact');
});

module.exports = router;