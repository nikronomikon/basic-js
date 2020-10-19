const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
if (typeof disksNumber != 'number' || typeof turnsSpeed  != 'number') {
  return
}

  let res = {},
  turns = turnsCalc(disksNumber),
  seconds = Math.floor(turns / (turnsSpeed/3600));

  res.turns = turns; 
  res.seconds = seconds;
  
  return res;
};

function turnsCalc(disksNumber) {
	if (disksNumber == 0) {
		return 0;
	}
	return turnsCalc(disksNumber - 1) * 2 + 1;
}
