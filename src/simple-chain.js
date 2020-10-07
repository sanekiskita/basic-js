
const chainMaker = {
chain: [],

getLength() {
  return this.chain.length;
},
addLink(value) {
  if (value === 'undefined') this.chain.push('');
  if (value === null) this.chain.push('null');
  else this.chain.push(value);
  return this;
},
removeLink(position) {
  if (typeof (position) !== 'number' || position < 1 || this.chain[position] === undefined) {
    this.chain = [];
    throw new Error('Error');
  }
  this.chain.splice(position - 1, 1);
  return this;
},
reverseChain() {
  this.chain = this.chain.reverse();
  return this;
},
finishChain() {
  let str = `( ${this.chain.join(' )~~( ')} )`;
  this.chain = [];
  return str;
}
};

module.exports = chainMaker;
