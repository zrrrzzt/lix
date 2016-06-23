'use strict'

module.exports = function calculateLix (text) {
  const numberOfWords = text.match(/\S+/g).length
  const numberOfPeriods = text.match(/\.|:/g).length
  const numberOfLongWords = text.split(' ').filter(function (word) {
    return word.length > 6
  }).length

  return numberOfWords/numberOfPeriods + (numberOfLongWords*100)/numberOfWords
}
