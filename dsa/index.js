'use strict';
const cats = require('./cat');
const dogs = require('./dog');
const Queue = require('./queue');

const initQueue = (arr) => {
  const queue = new Queue();
  for(let pet of arr){
    queue.enqueue(pet);
  }
  return queue;
};

const queueCats = initQueue(cats);
const queueDogs = initQueue(dogs);

module.exports = {
  queueCats, 
  queueDogs
};