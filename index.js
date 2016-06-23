'use strict'

module.exports = function calculateLix (input) {
  if (!input) {
    throw new Error('Missing required input')
  }
  const text = input.toString()
  const numberOfWords = (text.match(/\S+/g) || []).length
  const numberOfPeriods = (text.match(/\.|:/g) || []).length
  const numberOfLongWords = text.split(' ').filter(function (word) {
    return word.length > 6
  }).length
  const lix = numberOfWords / numberOfPeriods + (numberOfLongWords * 100) / numberOfWords

  return parseFloat(lix.toFixed(2))
}
