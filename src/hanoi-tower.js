
module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  const turns = 2**disksNumber -1,
  seconds = Math.floor( turns / (turnsSpeed  / 3600) );

  return {turns : turns, seconds : seconds};
};
