
'use strict';

const express = require('express');
const router = express.Router();

<<<<<<< HEAD
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
=======
let dogs = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://cdn-images-1.medium.com/max/460/1*P9uWn0ck85p4GtIX30a4rw.jpeg',
    imageDescription: 'A dog sitting at a computer writing computer programs.',
    name: 'Nicky',
    sex: 'Female',
    age: 7,
    breed: 'Golden Labrador',
    story: 'Too many bugs in code, was kicked from party.'
  },
  {
    imageURL: 'https://malialitman.files.wordpress.com/2014/06/funny-dog-one.jpg',
    imageDescription: 'A dog being having a smile forced on by a human',
    name: 'Scruffy',
    sex: 'Male',
    age: 4,
    breed: 'Mixed',
    story: 'Scruff had too much swag for previous owner.'
  }
];
>>>>>>> da00ab2f4d1f9a8f812a34c537693cdf9ae65aec

router.get('/dogs', (req, res) => {
  res.json(dogs[0]);
});

<<<<<<< HEAD
router.delete('/dogs', (req,res) => {
=======
router.delete('/dogs', (req, res) => {
>>>>>>> da00ab2f4d1f9a8f812a34c537693cdf9ae65aec
  let temp = dogs.shift();
  dogs.push(temp);
  res.json(dogs[0]);
});

module.exports = router;