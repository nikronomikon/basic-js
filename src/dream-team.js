module.exports = function createDreamTeam(arr) {
  return arr.toString().match(/[A-Z]/g).sort().join('');
};
