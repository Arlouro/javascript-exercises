const repeatString = function(string, repeatAmount) {
  if (repeatAmount < 0) {
    return 'ERROR';
  }

  let concatenatedString = '';
  for (let i = 0; i < repeatAmount; i++) {
    concatenatedString += string;
  }
  return concatenatedString;
};

// Do not edit below this line
module.exports = repeatString;
