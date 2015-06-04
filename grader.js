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
  },

  averageScore: function(arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        result += arr[i]/arr.length;
    }
    return result;
  },

  medianScore: function(arr) {
      arr.sort();
      var half = Math.floor(arr.length/2);
      if(arr.length % 2)
          return arr[half];
      else
          return (arr[half-1] + arr[half]) / 2.0;
  },

  modeScore: function(arr) {
    var mode = {};
    var max = 0;
    var count = 0;

    arr.forEach(function(e) {
      if (mode[e]) { mode[e]++; }
        else { mode[e] = 1; }

        if (count<mode[e]) {
            max = e;
            count = mode[e];
            }
        });
        return max;
    }
  };
