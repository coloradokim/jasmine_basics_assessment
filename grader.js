module.exports = {
  letterGrader: function(num) {
  if (num >=90 && num <= 100) {
    return 'A';
  }
  else if (num >=80 && num <= 89) {
      return 'B';
  }
  else if (num >=70 && num <= 79) {
      return 'C';
  }
  else if (num >=60 && num <= 69) {
      return 'D';
  }
  else if (num >=0 && num <= 59) {
      return 'F';
  }
  else {
    return 'not possible';
    }
  }
}, 

Write a function 'averageScore` which takes an array of
test scores and returns the average score.

```
averageScore([90, 95, 87, 60]);
//=> 83

module.exports = {
  letterGrader: function(num) {
