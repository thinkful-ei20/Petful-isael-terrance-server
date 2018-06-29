
'use strict';

const express = require('express');
const router = express.Router();

let dogs = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
},{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'hi',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'smoked too much pot'
}];

router.get('/dogs', (req, res) => {
  res.json(dogs[0]);
});

router.delete('/dogs', (req,res) => {
  let temp = dogs.shift();
  dogs.push(temp);
  res.json(dogs[0]);
});

module.exports = router;