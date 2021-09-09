
var Bundle_possibleTypes = ['Bundle']
module.exports.isBundle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBundle"')
  return Bundle_possibleTypes.includes(obj.__typename)
}



var Burn_possibleTypes = ['Burn']
module.exports.isBurn = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBurn"')
  return Burn_possibleTypes.includes(obj.__typename)
}



var LiquidityPosition_possibleTypes = ['LiquidityPosition']
module.exports.isLiquidityPosition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLiquidityPosition"')
  return LiquidityPosition_possibleTypes.includes(obj.__typename)
}



var LiquidityPositionSnapshot_possibleTypes = ['LiquidityPositionSnapshot']
module.exports.isLiquidityPositionSnapshot = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLiquidityPositionSnapshot"')
  return LiquidityPositionSnapshot_possibleTypes.includes(obj.__typename)
}



var Mint_possibleTypes = ['Mint']
module.exports.isMint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMint"')
  return Mint_possibleTypes.includes(obj.__typename)
}



var Pair_possibleTypes = ['Pair']
module.exports.isPair = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPair"')
  return Pair_possibleTypes.includes(obj.__typename)
}



var PairDayData_possibleTypes = ['PairDayData']
module.exports.isPairDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPairDayData"')
  return PairDayData_possibleTypes.includes(obj.__typename)
}



var PairHourData_possibleTypes = ['PairHourData']
module.exports.isPairHourData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPairHourData"')
  return PairHourData_possibleTypes.includes(obj.__typename)
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



var Swap_possibleTypes = ['Swap']
module.exports.isSwap = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}



var Token_possibleTypes = ['Token']
module.exports.isToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



var TokenDayData_possibleTypes = ['TokenDayData']
module.exports.isTokenDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTokenDayData"')
  return TokenDayData_possibleTypes.includes(obj.__typename)
}



var Transaction_possibleTypes = ['Transaction']
module.exports.isTransaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}



var UniswapDayData_possibleTypes = ['UniswapDayData']
module.exports.isUniswapDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUniswapDayData"')
  return UniswapDayData_possibleTypes.includes(obj.__typename)
}



var UniswapFactory_possibleTypes = ['UniswapFactory']
module.exports.isUniswapFactory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUniswapFactory"')
  return UniswapFactory_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
module.exports.isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
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
