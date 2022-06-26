
var Alert_possibleTypes = ['Alert']
module.exports.isAlert = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAlert"')
  return Alert_possibleTypes.includes(obj.__typename)
}



var AlertEndCursor_possibleTypes = ['AlertEndCursor']
module.exports.isAlertEndCursor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAlertEndCursor"')
  return AlertEndCursor_possibleTypes.includes(obj.__typename)
}



var AlertPageInfo_possibleTypes = ['AlertPageInfo']
module.exports.isAlertPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAlertPageInfo"')
  return AlertPageInfo_possibleTypes.includes(obj.__typename)
}



var AlertsResponse_possibleTypes = ['AlertsResponse']
module.exports.isAlertsResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAlertsResponse"')
  return AlertsResponse_possibleTypes.includes(obj.__typename)
}



var AlertSource_possibleTypes = ['AlertSource']
module.exports.isAlertSource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAlertSource"')
  return AlertSource_possibleTypes.includes(obj.__typename)
}



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



var Bot_possibleTypes = ['Bot']
module.exports.isBot = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBot"')
  return Bot_possibleTypes.includes(obj.__typename)
}



var Contract_possibleTypes = ['Contract']
module.exports.isContract = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContract"')
  return Contract_possibleTypes.includes(obj.__typename)
}



var Contacts_possibleTypes = ['Contacts']
module.exports.isContacts = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContacts"')
  return Contacts_possibleTypes.includes(obj.__typename)
}



var Project_possibleTypes = ['Project']
module.exports.isProject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProject"')
  return Project_possibleTypes.includes(obj.__typename)
}



var ProjectEdge_possibleTypes = ['ProjectEdge']
module.exports.isProjectEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectEdge"')
  return ProjectEdge_possibleTypes.includes(obj.__typename)
}



var ProjectPageInfo_possibleTypes = ['ProjectPageInfo']
module.exports.isProjectPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectPageInfo"')
  return ProjectPageInfo_possibleTypes.includes(obj.__typename)
}



var ProjectsResponse_possibleTypes = ['ProjectsResponse']
module.exports.isProjectsResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectsResponse"')
  return ProjectsResponse_possibleTypes.includes(obj.__typename)
}



var Social_possibleTypes = ['Social']
module.exports.isSocial = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSocial"')
  return Social_possibleTypes.includes(obj.__typename)
}



var Token_possibleTypes = ['Token']
module.exports.isToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}
