const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let elapsedTime, k;
  
  if (typeof sampleActivity != 'string') {
    return false
  }
  if (sampleActivity > 0 && sampleActivity <= 15) {
    sampleActivity = parseFloat(sampleActivity);
    k = Math.log1p(2)/HALF_LIFE_PERIOD;
    elapsedTime = Math.log1p(MODERN_ACTIVITY/sampleActivity)/k;

    return elapsedTime;
  } else { 
    return false;
  }
};
