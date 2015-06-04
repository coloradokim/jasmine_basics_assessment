var code = require('./../grader.js');

 describe('test one', function() {
  it('evaluates a number between 1 - 100, and returns a letter grade', function() {
    expect(code.letterGrader(93)).toEqual('A');
    expect(code.letterGrader(89)).toEqual('B');
    expect(code.letterGrader(72)).toEqual('C');
    expect(code.letterGrader(2)).toEqual('F');
    expect(code.letterGrader(-11)).toEqual('not possible');
  });
});

describe('test two', function() {
 it('accepts an array of numbers, and returns the average of those numbers', function() {
   expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
