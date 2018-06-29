
'use strict';

const express = require('express');
const router = express.Router();
const {queueDogs} = require('../dsa');

router.get('/dogs', (req, res) => {
  res.json(queueDogs.peek());
});

router.delete('/dogs', (req, res) => {
  res.json(queueDogs.dequeue());
});

module.exports = router;