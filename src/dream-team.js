const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(N) {
  let teamNewName=[];if(N===null || N===undefined  || !Array.isArray(N)){return false}
  for (let el of Object.values(N)){
    if(typeof(el) === 'string'){
 el = el.split(' ').join('');
 teamNewName.push(el[0].toUpperCase())
    } };teamNewName=teamNewName.sort(); return teamNewName.join('')
   
}

module.exports = {
  createDreamTeam
};
