
module.exports = function transform( arr ) {
  if(!Array.isArray(arr)) {
  		throw Error();
  	}
let arr2=[];
let pred;

  for( i = 0; i < arr.length; ++i) {
    switch(arr[i]) {
      case '--discard-next':  i++;

        break;

      case '--discard-prev': arr2.pop();

        break;
        case "--double-next":
    arr2.push(arr[i + 1]);

  break;
case "--double-prev":
    arr2.push(arr[i - 1]);


      default: arr2.push(arr[i]);

        break;
    }

  }

};
