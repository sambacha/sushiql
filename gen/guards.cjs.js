
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



var Subscription_possibleTypes = ['Subscription']
module.exports.isSubscription = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



var _Block__possibleTypes = ['_Block_']
module.exports.is_Block_ = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}



var _Meta__possibleTypes = ['_Meta_']
module.exports.is_Meta_ = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}
