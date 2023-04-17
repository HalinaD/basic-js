const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
 
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink( value = "") {
   this.arr.push('( )')
  },
  removeLink( position ) {
    if (typeof position !== "number" || position <= 0 > this.arr.length) throw new Error("You can't remove incorrect link")
    this.arr = []
    return this;
  },
  reverseChain() {
    this.arr.reverse;
    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
