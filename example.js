'use strict'

const lix = require('./index')
const text = 'Dette er en lang tekst. Den har noen, men ikke så mange, kjempevanskelige ord. Her er et eksempel på et slikt ord: onomatopoetikon.'

console.log(lix(text)) // => 18.79
// console.log(lix('73737373737.')) // => 18.79
