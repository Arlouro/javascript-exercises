const removeFromArray = function() {
  let array = arguments[0];
  let args = Array.from(arguments);
  args.shift();
  return array.filter((element) => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
