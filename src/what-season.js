

module.exports = function getSeason( date ) {

  if(date === undefined) {
   return "Unable to determine the time of year!";
  }
   if(date && !date.getMonth() && date.getMonth() !== 0) {
    throw Error;
   }

   try {
    date.getUTCDate();
  }
  catch(error) {
    throw Error;
  }

var month;
var number = date.getMonth();
if (number < 2 || number > 10) {
   return  "winter";
} else if (number < 5) {
   return  "spring";
} else if (number < 8) {
   return  "summer";
} else {
return "autumn";
}

};
