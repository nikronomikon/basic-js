const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.flat().reduce((acc, val) => {
      if (val === '^^') { acc += 1}; return acc;
    },0);
};
