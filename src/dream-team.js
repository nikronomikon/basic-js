const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) { 
    return false;
  }

  arr = arr.filter((a) => typeof a === 'string').map((a) => a.replace(/\ /g, '').match(/[A-Za-z]{1}/)[0].toUpperCase()).sort().join('');

  return arr;
};
