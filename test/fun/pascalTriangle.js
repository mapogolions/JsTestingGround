'use strict';

const test = require('ava');

const { pascalTriangle } = require('../../src/fun/pascalTriangle.js');
const List = require('../../src/abstract data/fp-list.js');

test("test `pascalTriangle`", t => {
  t.deepEqual(List.array(pascalTriangle(1)), [1]);
  t.deepEqual(List.array(pascalTriangle(2)), [1, 1]);
  t.deepEqual(List.array(pascalTriangle(3)), [1, 2, 1]);
  t.deepEqual(List.array(pascalTriangle(4)), [1, 3, 3, 1]);
  t.deepEqual(List.array(pascalTriangle(5)), [1, 4, 6, 4, 1]);
});