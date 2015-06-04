var code = require('./../grader.js');

 describe('test one', function() {
  it('evaluates a number between 1 - 100, and returns a letter grade', function() {
    expect(code.letterGrader(93)).toEqual('A');
    expect(code.letterGrader(89)).toEqual('B');
    expect(code.letterGrader(72)).toEqual('C');
    expect(code.letterGrader(66)).toEqual('D');
    expect(code.letterGrader(2)).toEqual('F');
    expect(code.letterGrader(-11)).toEqual('not possible');
  });
});

describe('test two', function() {
 it('accepts an array of numbers, and returns the average of those numbers', function() {
   expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
   expect(code.averageScore([33, 8, 91])).toEqual(44);
   expect(code.averageScore([90, NaN, 87, 60])).toEqual(NaN);
  });
});

describe('test three', function() {
 it('accepts an array of numbers, and returns the median of those numbers', function() {
   expect(code.medianScore([52,80,80,86,94])).toEqual(80);
   expect(code.medianScore([52,80,80,NaN,94])).toEqual(80);
   expect(code.medianScore([1,3,5,7,9])).toEqual(5);

  });
});

describe('test four', function() {
 it('accepts an array of numbers, and returns the mode of those numbers', function() {
   expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
   expect(code.modeScore([4,4,4,6,2,7,7,9,9])).toEqual(4);
   expect(code.modeScore([4,4,4,6,2,7,7,NaN,9])).toEqual(4);
  });
});
