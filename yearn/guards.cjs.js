
var Account_possibleTypes = ['Account']
module.exports.isAccount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAccount"')
  return Account_possibleTypes.includes(obj.__typename)
}



var AccountVaultPosition_possibleTypes = ['AccountVaultPosition']
module.exports.isAccountVaultPosition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAccountVaultPosition"')
  return AccountVaultPosition_possibleTypes.includes(obj.__typename)
}



var AccountVaultPositionUpdate_possibleTypes = ['AccountVaultPositionUpdate']
module.exports.isAccountVaultPositionUpdate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAccountVaultPositionUpdate"')
  return AccountVaultPositionUpdate_possibleTypes.includes(obj.__typename)
}



var Deposit_possibleTypes = ['Deposit']
module.exports.isDeposit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeposit"')
  return Deposit_possibleTypes.includes(obj.__typename)
}



var Harvest_possibleTypes = ['Harvest']
module.exports.isHarvest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHarvest"')
  return Harvest_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Registry_possibleTypes = ['Registry']
module.exports.isRegistry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistry"')
  return Registry_possibleTypes.includes(obj.__typename)
}



var Strategy_possibleTypes = ['Strategy']
module.exports.isStrategy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStrategy"')
  return Strategy_possibleTypes.includes(obj.__typename)
}



var StrategyReport_possibleTypes = ['StrategyReport']
module.exports.isStrategyReport = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStrategyReport"')
  return StrategyReport_possibleTypes.includes(obj.__typename)
}



var StrategyReportResult_possibleTypes = ['StrategyReportResult']
module.exports.isStrategyReportResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStrategyReportResult"')
  return StrategyReportResult_possibleTypes.includes(obj.__typename)
}



var Subscription_possibleTypes = ['Subscription']
module.exports.isSubscription = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



var Token_possibleTypes = ['Token']
module.exports.isToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



var TokenFee_possibleTypes = ['TokenFee']
module.exports.isTokenFee = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTokenFee"')
  return TokenFee_possibleTypes.includes(obj.__typename)
}



var Transaction_possibleTypes = ['Transaction']
module.exports.isTransaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}



var Transfer_possibleTypes = ['Transfer']
module.exports.isTransfer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransfer"')
  return Transfer_possibleTypes.includes(obj.__typename)
}



var Vault_possibleTypes = ['Vault']
module.exports.isVault = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVault"')
  return Vault_possibleTypes.includes(obj.__typename)
}



var VaultDayData_possibleTypes = ['VaultDayData']
module.exports.isVaultDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVaultDayData"')
  return VaultDayData_possibleTypes.includes(obj.__typename)
}



var VaultUpdate_possibleTypes = ['VaultUpdate']
module.exports.isVaultUpdate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVaultUpdate"')
  return VaultUpdate_possibleTypes.includes(obj.__typename)
}



var Withdrawal_possibleTypes = ['Withdrawal']
module.exports.isWithdrawal = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWithdrawal"')
  return Withdrawal_possibleTypes.includes(obj.__typename)
}



var Yearn_possibleTypes = ['Yearn']
module.exports.isYearn = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isYearn"')
  return Yearn_possibleTypes.includes(obj.__typename)
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
