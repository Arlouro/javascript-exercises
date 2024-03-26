const convertToCelsius = function() {
  let temperature = arguments[0];
  let tempConversion = (temperature - 32) * 5 / 9;

  return Math.round(tempConversion * 10) / 10;
};

const convertToFahrenheit = function() {
  let temperature = arguments[0];
  let tempConversion = temperature * 9 / 5 + 32;

  return Math.round(tempConversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
