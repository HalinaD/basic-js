const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  storage:[],
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink( value = "") {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink( position ) {
    this.storage = 0;
    if (typeof position !== "number" || position <= 0 > this. getLength()) throw new Error("You can't remove incorrect link")
    this.storage.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.storage.reverse;
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
