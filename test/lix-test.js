'use strict'

const tap = require('tap')
const lix = require('../index')
const text = 'Dette er en lang tekst. Den har noen, men ikke så mange, kjempevanskelige ord. Her er et eksempel på et slikt ord: onomatopoetikon.'

tap.throws(
  function () {
    lix()
  },
  {message: 'Missing required input'},
  'It requires input'
)

tap.equal(lix(text), 18.79, 'It returns expected result')
