'use strict';
const cat = require('./cat');
const dog = require('./dog');
const Queue = require('./queue');

const initQueue = (arr) => {
  const queue = new Queue();
  for(let pet of arr){
    queue.enqueue(pet);
  }
  return queue;
};

const cats = initQueue(cat);
const dogs = initQueue(dog);

module.exports = {
  cats, 
  dogs
};