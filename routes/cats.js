'use strict';
const express = require('express');
const router = express.Router();

const {queueCats} = require('../dsa');
router.get('/cats', (req, res) => {
  res.json(queueCats.peek());
});

router.delete('/cats', (req,res) => {
  res.json(queueCats.dequeue());
});

module.exports = router;