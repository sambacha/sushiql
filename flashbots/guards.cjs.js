
var Block_possibleTypes = ['Block']
module.exports.isBlock = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlock"')
  return Block_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Transaction_possibleTypes = ['Transaction']
module.exports.isTransaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}
