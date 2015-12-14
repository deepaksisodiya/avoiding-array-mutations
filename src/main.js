/**
 * Created by deepaksisodiya on 11/12/15.
 */

var expect = require('expect');
var deepFreeze = require('deep-freeze');

const addCounter = (list) => {
  // list.push(0); push modify the original array
  return list.concat([0]); // concat does not modify the original array, it returns the new array
  // return [...list, [0]];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);

};

testAddCounter();

const removeCounter = (list, index) => {
  // list.splice(index, 1); splice modify the original array

  return list
    .slice(0, index)
    .concat(list.slice(index + 1));

  /*
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
  */
};

const testRemoveCounter = () => {
  const listBefore = [1, 2, 3];
  const listAfter = [1, 3];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testRemoveCounter();

const incrementCounter = (list, index) => {
  // list[index]++; modify the original array

  return list
    .slice(0, index)
    .concat(list[index] + 1)
    .concat(list.slice(index + 1));

  /*
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
  */
};

const testIncrementCounter = () => {
  const listBefore = [1, 10, 20];
  const listAfter = [1, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testIncrementCounter();



console.log('test passed');