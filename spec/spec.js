var code = require('./../grader.js');

 describe('test one', function() {
  it('evaluates a number between 1 - 100, and returns a letter grade', function() {
    expect(code.letterGrader(93)).toEqual('A');
    expect(code.letterGrade(90)).toEqual('A');
  });
});
