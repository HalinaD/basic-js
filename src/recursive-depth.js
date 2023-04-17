const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  
  /*calculateDepth( arr ) {
    let counter = 1,
    depth = 1;
    for (let item of arr){
      if (Array.isArray(item)){
        counter = 1 + this.calculateDepth(item);
      }
    }
    if (counter >= depth) {
      depth = counter;
    }
    this.counter = 1;
    return depth
  }*/
  
  calculateDepth( arr ) {
    if (arr instanceof Array){
     let depth = 0;
     
     for (let i=0; i<arr.length;i++){
      let counter = this.calculateDepth.call(this, arr[i]);
      if(depth<counter){
        depth = counter;
      }
     }
     return 1 + depth;
    }else{return 0}
  }

}


module.exports = {
  DepthCalculator
};
