'use strict';
const express = require('express');
const router = express.Router();

const cats = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
];

router.get('/cats', (req, res) => {
  res.json(cats[0]);
});

router.delete('/cats', (req,res) => {
  res.json('deleted');
});

module.exports = router;