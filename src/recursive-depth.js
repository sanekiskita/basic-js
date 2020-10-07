
module.exports = class DepthCalculator {
  calculateDepth(nu) {
    var cal = 1;
    	nu.forEach(i =>{
  	    if(Array.isArray(i)) {
  	       cal = Math.max(this.calculateDepth(i) + 1, cal);
  	    }
  	})
  		return cal;
  }
};
